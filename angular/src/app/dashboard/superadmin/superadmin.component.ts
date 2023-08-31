import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Scheme } from 'src/app/model/Scheme';
import { User } from 'src/app/model/User';
import { Village } from 'src/app/model/Village';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css'],
})
export class SuperadminComponent {
  constructor(private http: HttpClient) {}

  // temp:any
  Village: Village = new Village();

  //scheme object
  scheme: Scheme = new Scheme();
  selectedVillage;
  
  

  allunverifiedUser: User[] = [];

  whatToShow = 0;
  show(num: number) {
    this.whatToShow = num;
  }

  addVillage() {
    this.http
      .post('http://localhost:8080/' + 'addVillageData', this.Village)
      .subscribe((data: any) => {
        //  this.temp=data
        if (data == false) {
          window.alert('Expection on server');
        } else {
          window.alert('added successfull');
          this.Village = new Village();
        }
      });
  }
  getDataOfUser() {
    console.log(this.allunverifiedUser);
    this.http
      .get('http://localhost:8080/' + 'getunverifieduserData')
      .subscribe((data: any) => {
        if (data == null) {
          window.alert('Exception on server');
        } else {
          this.allunverifiedUser = data;
        }
      });
  }


  //scheme btn
  addScheme(){
    this.http.post('http://localhost:8080/' + 'addScheme', this.scheme, this.selectedVillage).subscribe((data:any)=>{
      if(data==false){
        alert("exception on error")
      }
      else{
        alert("added succssfull")
      }
      console.log(this.selectedVillage);

    })
  }
alllVillageData:Village[]=[];
  //get village
  getVillage(){
    this.http.get('http://localhost:8080/'+'getVillageData').subscribe((data:any)=>{
      if(data==null){
        alert("execption error");
      }
      else{
        this.alllVillageData=data
      }
      
    })
  }
}
