import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { signUpFormService } from './services/signInUp.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ], 

  providers: [
    signUpFormService
  ]
})
export class CoreModule { }
