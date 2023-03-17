import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in-uppage/sign-in/sign-in.component';
import { SignUpComponent } from './sign-in-uppage/sign-up/sign-up.component';

const routes: Routes = [
    { path: 'signUp', component: SignUpComponent, loadChildren: ()=> import('./sign-in-uppage/sign-up/sign-up.module').then(m=>m.SignUpModule)},
    { path: 'signIn', component: SignInComponent, loadChildren: ()=> import('./sign-in-uppage/sign-in/sign-in.module').then(m=>m.SignInModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinInUpRoutingModule { }
 