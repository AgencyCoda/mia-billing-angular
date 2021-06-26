import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaBillingPageComponent } from './mia-billing-page.component';

describe('MiaBillingPageComponent', () => {
  let component: MiaBillingPageComponent;
  let fixture: ComponentFixture<MiaBillingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaBillingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaBillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
