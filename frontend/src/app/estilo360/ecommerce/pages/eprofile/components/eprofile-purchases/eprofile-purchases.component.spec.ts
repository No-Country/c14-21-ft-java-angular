import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EprofilePurchasesComponent } from './eprofile-purchases.component';

describe('EprofilePurchasesComponent', () => {
  let component: EprofilePurchasesComponent;
  let fixture: ComponentFixture<EprofilePurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EprofilePurchasesComponent]
    });
    fixture = TestBed.createComponent(EprofilePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
