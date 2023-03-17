import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHealthMediaComponent } from './social-health-media.component';

describe('SocialHealthMediaComponent', () => {
  let component: SocialHealthMediaComponent;
  let fixture: ComponentFixture<SocialHealthMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialHealthMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialHealthMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
