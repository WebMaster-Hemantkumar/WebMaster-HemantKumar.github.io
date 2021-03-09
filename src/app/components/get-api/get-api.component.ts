import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users:any;
 
  ngOnInit(): void {
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
    this.users=data;

  })
    }

  }

