import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinInUpRoutingModule } from './sin-in-up-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignInUppageComponent } from './sign-in-uppage/sign-in-uppage.component';


@NgModule({
  declarations: [
    SignInUppageComponent
  ],
  imports: [
    CommonModule,
    SinInUpRoutingModule,
    SharedModule
  ]
})
export class SinInUpModule { }
