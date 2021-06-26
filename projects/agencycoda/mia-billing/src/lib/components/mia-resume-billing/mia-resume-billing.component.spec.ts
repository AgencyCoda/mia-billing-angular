import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaResumeBillingComponent } from './mia-resume-billing.component';

describe('MiaResumeBillingComponent', () => {
  let component: MiaResumeBillingComponent;
  let fixture: ComponentFixture<MiaResumeBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaResumeBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaResumeBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
