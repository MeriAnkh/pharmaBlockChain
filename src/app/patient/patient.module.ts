import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDashbordComponent } from './Components/patient-dashbord/patient-dashbord.component';

import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePatientComponent } from './Components/home-patient/home-patient.component';
import { CommandsPatientComponent } from './Components/commands-patient/commands-patient.component';
import { MedicinesPatientComponent } from './Components/medicines-patient/medicines-patient.component';
import { HealthSuggestionsPatientComponent } from './Components/health-suggestions-patient/health-suggestions-patient.component';
import { SocialHealthMediaComponent } from './Components/social-health-media/social-health-media.component';
import { HistoriquePatientComponent } from './Components/historique-patient/historique-patient.component';
import { PatientComponent } from './patient.component';


@NgModule({
  declarations: [
    PatientDashbordComponent,
    HomePatientComponent,
    CommandsPatientComponent,
    MedicinesPatientComponent,
    HealthSuggestionsPatientComponent,
    HistoriquePatientComponent,
    SocialHealthMediaComponent,
    PatientComponent,
      ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule
  ],
  exports: [
    PatientDashbordComponent
  ]
})
export class PatientModule { }
