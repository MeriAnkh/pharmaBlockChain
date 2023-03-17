import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PharmacieSignUpComponent } from './components/pharmacie/pharmacie-sign-up/pharmacie-sign-up.component';
import { PharmacieSignUp2Component } from './components/pharmacie/pharmacie-sign-up2/pharmacie-sign-up2.component';
import { PharmacistSignUpComponent } from './components/pharmacien/pharmacist-sign-up/pharmacist-sign-up.component';
import { PharmacistSignUp2Component } from './components/pharmacien/pharmacist-sign-up2/pharmacist-sign-up2.component';
import { SignUpPharmaBlockChainComponent } from './components/patient/sign-up-pharma-block-chain/sign-up-pharma-block-chain.component';


const routes: Routes = [
  {path: 'actors1', component: SignUpPharmaBlockChainComponent},

  {path: 'actors2', component: PharmacistSignUpComponent},
  {path: 'actors2/step2', component: PharmacistSignUp2Component},

  {path: 'actors3', component: PharmacieSignUpComponent},
  {path: 'actors3/step2', component: PharmacieSignUp2Component},

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
