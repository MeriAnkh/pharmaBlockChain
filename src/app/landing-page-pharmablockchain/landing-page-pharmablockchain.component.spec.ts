import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagePharmablockchainComponent } from './landing-page-pharmablockchain.component';

describe('LandingPagePharmablockchainComponent', () => {
  let component: LandingPagePharmablockchainComponent;
  let fixture: ComponentFixture<LandingPagePharmablockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPagePharmablockchainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPagePharmablockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
