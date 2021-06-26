import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaBillingComponent } from './mia-billing.component';

describe('MiaBillingComponent', () => {
  let component: MiaBillingComponent;
  let fixture: ComponentFixture<MiaBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
