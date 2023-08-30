import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdmindashboardComponent,
    SuperadminComponent,
    UserdashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports:[
    AdmindashboardComponent,
    SuperadminComponent,
    UserdashboardComponent
  ]
})
export class DashboardModule { }
