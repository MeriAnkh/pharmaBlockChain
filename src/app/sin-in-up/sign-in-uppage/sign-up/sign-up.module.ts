import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PharmacieSignUpComponent } from './components/pharmacie/pharmacie-sign-up/pharmacie-sign-up.component';
import { PharmacieSignUp2Component } from './components/pharmacie/pharmacie-sign-up2/pharmacie-sign-up2.component';
import { PharmacistSignUp2Component } from './components/pharmacien/pharmacist-sign-up2/pharmacist-sign-up2.component';
import { PharmacistSignUpComponent } from './components/pharmacien/pharmacist-sign-up/pharmacist-sign-up.component';
import { SignUpPharmaBlockChainComponent } from './components/patient/sign-up-pharma-block-chain/sign-up-pharma-block-chain.component';
import { SignUpComponent } from './sign-up.component';



@NgModule({
  declarations: [
    SignUpComponent,
    PharmacieSignUpComponent,
    PharmacieSignUp2Component,
    PharmacistSignUp2Component,
    PharmacistSignUpComponent,
    SignUpPharmaBlockChainComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule,
    
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
