import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistSignUp2Component } from './pharmacist-sign-up2.component';

describe('PharmacistSignUp2Component', () => {
  let component: PharmacistSignUp2Component;
  let fixture: ComponentFixture<PharmacistSignUp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacistSignUp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacistSignUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
