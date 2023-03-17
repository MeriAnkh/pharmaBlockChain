import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPharmablockchainComponent } from './components/sign-in-pharmablockchain/sign-in-pharmablockchain.component';

const routes: Routes = [
  { path: 'actors', component: SignInPharmablockchainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignInRoutingModule { }
