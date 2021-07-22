import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaPaypalMethodComponent } from './mia-paypal-method.component';

describe('MiaPaypalMethodComponent', () => {
  let component: MiaPaypalMethodComponent;
  let fixture: ComponentFixture<MiaPaypalMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaPaypalMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaPaypalMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
