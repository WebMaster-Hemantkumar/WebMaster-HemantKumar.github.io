import { Component, OnInit } from '@angular/core';
import {ApiCallService} from '../../../services/api-call.service';
import{Router} from  '@angular/router';
@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  
  constructor(private ApiCallService:ApiCallService,private router:Router ) { }
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

  
// code for queryParameter
  submit(){
    this.router.navigate(['/users'],
    {
queryParams:{page:1,id:2}
    });
  }
}

  




