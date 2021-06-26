import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaSuccessBillingComponent } from './mia-success-billing.component';

describe('MiaSuccessBillingComponent', () => {
  let component: MiaSuccessBillingComponent;
  let fixture: ComponentFixture<MiaSuccessBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaSuccessBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaSuccessBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
