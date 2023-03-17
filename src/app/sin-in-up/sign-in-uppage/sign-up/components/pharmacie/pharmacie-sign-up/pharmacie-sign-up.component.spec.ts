import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieSignUpComponent } from './pharmacie-sign-up.component';

describe('PharmacieSignUpComponent', () => {
  let component: PharmacieSignUpComponent;
  let fixture: ComponentFixture<PharmacieSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacieSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacieSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
