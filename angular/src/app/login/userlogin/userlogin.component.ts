import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent {
  constructor(private http: HttpClient, private app: AppComponent) {}
  UIusername: any;
  UIpassword: any;

  login() {
    this.http
      .get(
        'http://localhost:8080/' +
          'login' +
          this.UIusername +
          '/' +
          this.UIpassword
      )
      .subscribe((data: any) => {
        if (data == -1) {
          window.alert('login not successful');
        }else if(data== -2){
          window.alert("user not verified please varified first");
        }
        else if(data == -3){
          alert("user rejected can not login")
        }
        
        else {
          this.app.isLoginSuccessData = data;
        }
      });
  }
}
