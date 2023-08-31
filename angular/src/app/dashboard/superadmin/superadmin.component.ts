import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { Village } from 'src/app/model/Village';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent {

  constructor(private http:HttpClient){}
  
  // temp:any
  Village:Village=new Village();


  allunverifiedUser:User[]=[];
  addVillage(){
    this.http.post('http://localhost:8080/' + 'addVillageData', this.Village).subscribe((data:any)=>{
    //  this.temp=data 
    if(data==false){
      window.alert("Expection on server");
    }else{
      window.alert("added successfull");
      this.Village=new Village();
    }
    })
  }
  getDataOfUser(){
    console.log(this.allunverifiedUser)
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

  whatToShow=0;
  show(num:number){
    this.whatToShow=num;
  }


}
