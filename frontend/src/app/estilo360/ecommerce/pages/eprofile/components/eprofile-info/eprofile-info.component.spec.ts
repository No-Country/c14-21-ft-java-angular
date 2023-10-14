import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EprofileInfoComponent } from './eprofile-info.component';

describe('EprofileInfoComponent', () => {
  let component: EprofileInfoComponent;
  let fixture: ComponentFixture<EprofileInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EprofileInfoComponent]
    });
    fixture = TestBed.createComponent(EprofileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
