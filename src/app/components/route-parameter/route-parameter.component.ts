import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import{ApiCallService} from '../../services/api-call.service'
@Component({
  selector: 'app-route-parameter',
  templateUrl: './route-parameter.component.html',
  styleUrls: ['./route-parameter.component.css']
})
export class RouteParameterComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
  private ApiCallService:ApiCallService ) { }
  user:any;
  ngOnInit(): void {
   let id= this.activatedRoute.snapshot.params['id'];
   this.ApiCallService.getDataById(id).subscribe(data=>{
     this.user=data;
   })
  }

}
