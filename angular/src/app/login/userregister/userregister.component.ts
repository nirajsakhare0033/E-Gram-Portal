import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css'],
})
export class UserregisterComponent {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  confirmPassword: string;
  registerUser: User = new User();

  userRegister() {
    this.http
      .post(this.url + '/register', this.registerUser)
      .subscribe((data: any) => {
        if (data == false) window.alert('register not sussfull');
        else window.alert('register sussfull');
      });
  }
}
