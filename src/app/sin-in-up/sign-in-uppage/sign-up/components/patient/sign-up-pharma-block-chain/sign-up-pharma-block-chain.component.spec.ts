import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPharmaBlockChainComponent } from './sign-up-pharma-block-chain.component';

describe('SignUpPharmaBlockChainComponent', () => {
  let component: SignUpPharmaBlockChainComponent;
  let fixture: ComponentFixture<SignUpPharmaBlockChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPharmaBlockChainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPharmaBlockChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
