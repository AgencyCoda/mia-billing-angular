import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaDiscountBillingComponent } from './mia-discount-billing.component';

describe('MiaDiscountBillingComponent', () => {
  let component: MiaDiscountBillingComponent;
  let fixture: ComponentFixture<MiaDiscountBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaDiscountBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaDiscountBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
