import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaChoiceBillingComponent } from './mia-choice-billing.component';

describe('MiaChoiceBillingComponent', () => {
  let component: MiaChoiceBillingComponent;
  let fixture: ComponentFixture<MiaChoiceBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaChoiceBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaChoiceBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
