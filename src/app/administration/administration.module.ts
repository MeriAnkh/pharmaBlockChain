import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdministrationComponent } from './administration.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
