import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaStepsBillingComponent } from './mia-steps-billing.component';

describe('MiaStepsBillingComponent', () => {
  let component: MiaStepsBillingComponent;
  let fixture: ComponentFixture<MiaStepsBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaStepsBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaStepsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
