import { Component, OnInit } from '@angular/core';
import {ApiCallService} from '../../../services/api-call.service'
@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  
  constructor(private ApiCallService:ApiCallService ) { }
  selectedCounrty: any;
  username:any;
  ngOnInit() {
     this.ApiCallService.getAllData().subscribe(data=>{
     this.selectedCounrty=data;
     

     })
  }
  
 onOptionsSelected(name:string){
    console.log("the selected value is " + name);
    this.username=name
  }
}

  




