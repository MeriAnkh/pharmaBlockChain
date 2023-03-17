import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsPatientComponent } from './Components/commands-patient/commands-patient.component';
import { HealthSuggestionsPatientComponent } from './Components/health-suggestions-patient/health-suggestions-patient.component';
import { HistoriquePatientComponent } from './Components/historique-patient/historique-patient.component';
import { HomePatientComponent } from './Components/home-patient/home-patient.component';
import { MedicinesPatientComponent } from './Components/medicines-patient/medicines-patient.component';
import { SocialHealthMediaComponent } from './Components/social-health-media/social-health-media.component';

const routes: Routes = [
  {path: '', component: HomePatientComponent},
  {path: 'commands-patient', component: CommandsPatientComponent},
  {path: 'medicines-patients', component: MedicinesPatientComponent},
  {path: 'health-suggestions', component: HealthSuggestionsPatientComponent},
  {path: 'historique-patient', component: HistoriquePatientComponent},
  {path: 'social-health-media', component: SocialHealthMediaComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
