import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { LandingPagePharmablockchainComponent } from './landing-page-pharmablockchain/landing-page-pharmablockchain.component';
import { CoreModule } from './core/core.module';
import { PatientModule } from './patient/patient.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPagePharmablockchainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
