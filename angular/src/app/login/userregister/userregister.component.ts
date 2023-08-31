import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { Village } from 'src/app/model/Village';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css'],
})
export class UserregisterComponent {
  url = 'http://localhost:8080';
  allVillageData: Village[] = [];
  constructor(private http: HttpClient) {
    this.http
      .get('http://localhost:8080/' + 'getVillageData')
      .subscribe((data: any) => {
        if (data == null) {
          alert('exception error');
        } else {
          this.allVillageData = data;
        }
      });
  }
  confirmPassword: string;
  registerUser: User = new User();
  selectedVillage;

  userRegister() {
    this.http
      .post(this.url + '/register' + 'selectedVillage', this.registerUser, this.selectedVillage)
      .subscribe((data: any) => {
        if (data == false) window.alert('register not sussfull');
        else window.alert('register sussfull');
      });
  }
}
