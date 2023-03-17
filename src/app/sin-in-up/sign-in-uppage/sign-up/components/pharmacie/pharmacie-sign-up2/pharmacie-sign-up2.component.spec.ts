import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieSignUp2Component } from './pharmacie-sign-up2.component';

describe('PharmacieSignUp2Component', () => {
  let component: PharmacieSignUp2Component;
  let fixture: ComponentFixture<PharmacieSignUp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacieSignUp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacieSignUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
