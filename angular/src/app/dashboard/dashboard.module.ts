import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    SuperadminComponent,
    UserdashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
