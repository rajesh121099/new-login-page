import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router'; 
import {MatInputModule} from '@angular/material/input';
import { AccountsettingComponent } from './accountsetting/accountsetting.component';
// import { FormControl } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BillingsComponent } from './billings/billings.component';

import { SecurityComponent } from './security/security.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ForgetpasswordComponent,
    AccountsettingComponent,
    BillingsComponent,
    SecurityComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatSelectModule,MatGridListModule,MatInputModule,MatCardModule,MatButtonModule,MatButtonToggleModule,MatTableModule,FormsModule,ReactiveFormsModule,MatTabsModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'Login',component:LoginComponent},
      {path:'forgetpassword',component:ForgetpasswordComponent},
      {path:'signin',component:SigninComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
