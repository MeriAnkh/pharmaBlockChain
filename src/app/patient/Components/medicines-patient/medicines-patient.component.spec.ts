import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesPatientComponent } from './medicines-patient.component';

describe('MedicinesPatientComponent', () => {
  let component: MedicinesPatientComponent;
  let fixture: ComponentFixture<MedicinesPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinesPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinesPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
