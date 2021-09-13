import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  // {path:'LoginComponent',component:LoginComponent},
  // {path:'forgetpassword',component:ForgetpasswordComponent},
  // {path:'signin',component:SigninComponent},
];

@NgModule({
  // imports: [RouterModule],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =[LoginComponent,ForgetpasswordComponent,SigninComponent]
