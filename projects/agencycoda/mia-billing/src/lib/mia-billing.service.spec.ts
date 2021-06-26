import { TestBed } from '@angular/core/testing';

import { MiaBillingService } from './mia-billing.service';

describe('MiaBillingService', () => {
  let service: MiaBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
