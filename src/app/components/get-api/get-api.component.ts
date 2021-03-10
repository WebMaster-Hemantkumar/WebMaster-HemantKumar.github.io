import { Component, OnInit } from '@angular/core';
import{ApiCallService} from '../../services/api-call.service'
@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {

  constructor(private ApiCallService: ApiCallService) { }
  users:any;
 
  ngOnInit() {
    
 this.ApiCallService.getAllData().subscribe(data=>{
   this.users=data;
 })

  
    }

  }

