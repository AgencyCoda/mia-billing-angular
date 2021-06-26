import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaInfoBillingComponent } from './mia-info-billing.component';

describe('MiaInfoBillingComponent', () => {
  let component: MiaInfoBillingComponent;
  let fixture: ComponentFixture<MiaInfoBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaInfoBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaInfoBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
