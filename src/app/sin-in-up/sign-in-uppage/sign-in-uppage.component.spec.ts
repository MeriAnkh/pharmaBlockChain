import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUppageComponent } from './sign-in-uppage.component';

describe('SignInUppageComponent', () => {
  let component: SignInUppageComponent;
  let fixture: ComponentFixture<SignInUppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUppageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInUppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
