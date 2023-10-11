import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceLayoutComponent } from './ecommerce-layout.component';

describe('EcommerceLayoutComponent', () => {
  let component: EcommerceLayoutComponent;
  let fixture: ComponentFixture<EcommerceLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommerceLayoutComponent]
    });
    fixture = TestBed.createComponent(EcommerceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
