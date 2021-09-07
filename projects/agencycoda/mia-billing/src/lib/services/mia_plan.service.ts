import { Inject, Injectable } from '@angular/core';
import { MiaPlan } from '../entities/mia_plan';
import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { MiaAuthConfig, MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiaPlanService extends MiaBaseCrudHttpService<MiaPlan> {

  constructor(
    @Inject(MIA_AUTH_PROVIDER) protected config: MiaAuthConfig,
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = config.baseUrl + 'mia-plan';
  }
 
  fetchBySlug(slug: string): Observable<MiaPlan> {
    return this.getOb(this.config.baseUrl + 'mia-plan/fetch-slug/' + slug);
  }
}