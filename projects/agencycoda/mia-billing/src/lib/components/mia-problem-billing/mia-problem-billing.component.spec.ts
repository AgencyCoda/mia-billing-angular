import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaProblemBillingComponent } from './mia-problem-billing.component';

describe('MiaProblemBillingComponent', () => {
  let component: MiaProblemBillingComponent;
  let fixture: ComponentFixture<MiaProblemBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaProblemBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaProblemBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
