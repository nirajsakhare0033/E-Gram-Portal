import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';



@NgModule({
  declarations: [
    UserloginComponent,
    UserregisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
