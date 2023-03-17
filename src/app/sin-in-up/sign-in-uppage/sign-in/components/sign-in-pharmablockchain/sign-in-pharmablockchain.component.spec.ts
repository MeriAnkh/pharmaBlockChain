import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPharmablockchainComponent } from './sign-in-pharmablockchain.component';

describe('SignInPharmablockchainComponent', () => {
  let component: SignInPharmablockchainComponent;
  let fixture: ComponentFixture<SignInPharmablockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInPharmablockchainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInPharmablockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
