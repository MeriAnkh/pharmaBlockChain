import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { SignInPharmablockchainComponent } from './components/sign-in-pharmablockchain/sign-in-pharmablockchain.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignInPharmablockchainComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
