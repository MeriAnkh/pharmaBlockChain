import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSuggestionsPatientComponent } from './health-suggestions-patient.component';

describe('HealthSuggestionsPatientComponent', () => {
  let component: HealthSuggestionsPatientComponent;
  let fixture: ComponentFixture<HealthSuggestionsPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthSuggestionsPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthSuggestionsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
