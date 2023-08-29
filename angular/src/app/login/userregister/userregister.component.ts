import { Component } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  constructor(){}

  registerUser:User = new User();

  userRegister(){
    
  }

}
