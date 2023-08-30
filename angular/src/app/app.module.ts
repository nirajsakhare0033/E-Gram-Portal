import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
