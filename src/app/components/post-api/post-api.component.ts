import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {
  Country:any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
DaropdownData:any=[
  {code:91,Country:'India'},
  {code:92,Country:'Pak'},
  {code:93,Country:'Afganistan'},
  {code:94,Country:'USA'},
]

postData(){
 let url="src/assets/Country.json";
  this.http.post(url,{
    Country:this.Country
  }).toPromise().then((data:any)=>{
    console.log(data)
    console.log(JSON.stringify(data.json))
  })
}
}
