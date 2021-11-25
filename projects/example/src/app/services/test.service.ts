import { Injectable } from '@angular/core';
import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService extends MiaBaseCrudHttpService<any> {

  constructor(
    protected http: HttpClient
  ) {
    super(http);
    this.basePathUrl = environment.baseUrl + 'mia-payment';
  }
 
  verifyDiscount(code: string, planId: number): Observable<any> {
      return this.postOb(this.basePathUrl + '/verify-discount', { code: code, plan_id: planId });
  }
}