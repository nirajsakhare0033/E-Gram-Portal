import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserloginComponent, UserregisterComponent],
  imports: [CommonModule,FormsModule],
  exports: [UserloginComponent, UserregisterComponent],
})
export class LoginModule {}
