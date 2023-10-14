import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EprofileMenuComponent } from './eprofile-menu.component';

describe('EprofileMenuComponent', () => {
  let component: EprofileMenuComponent;
  let fixture: ComponentFixture<EprofileMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EprofileMenuComponent]
    });
    fixture = TestBed.createComponent(EprofileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
