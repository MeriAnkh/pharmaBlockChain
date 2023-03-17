import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPagePharmablockchainComponent } from './landing-page-pharmablockchain/landing-page-pharmablockchain.component';
import { PatientComponent } from './patient/patient.component';
import { SignInUppageComponent } from './sin-in-up/sign-in-uppage/sign-in-uppage.component';

const routes: Routes = [
  // {path: '', component: LandingPagePharmablockchainComponent},
  {path: 'signInUpPage', component: SignInUppageComponent, loadChildren: ()=> import('./sin-in-up/sin-in-up.module').then(m=>m.SinInUpModule)}, 
  /* onsignUp */ {path : '', component: PatientComponent, loadChildren: ()=> import('./patient/patient.module').then(m=>m.PatientModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
