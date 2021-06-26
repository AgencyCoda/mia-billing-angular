import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaHeaderBillingComponent } from './mia-header-billing.component';

describe('MiaHeaderBillingComponent', () => {
  let component: MiaHeaderBillingComponent;
  let fixture: ComponentFixture<MiaHeaderBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaHeaderBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaHeaderBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
