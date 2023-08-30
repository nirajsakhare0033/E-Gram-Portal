import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Village } from 'src/app/model/Village';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent {

  constructor(private http:HttpClient){}
  
temp:any
  Village:Village=new Village();

  addVillage(){
    this.http.post('http://localhost:8080/' + 'addVillageData', this.Village).subscribe((data:any)=>{
     this.temp=data 
    })
  }

}
