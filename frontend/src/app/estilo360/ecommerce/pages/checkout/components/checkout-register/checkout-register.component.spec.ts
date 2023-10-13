import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutRegisterComponent } from './checkout-register.component';

describe('CheckoutRegisterComponent', () => {
  let component: CheckoutRegisterComponent;
  let fixture: ComponentFixture<CheckoutRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutRegisterComponent]
    });
    fixture = TestBed.createComponent(CheckoutRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
