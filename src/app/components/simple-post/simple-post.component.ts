import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-simple-post',
  templateUrl: './simple-post.component.html',
  styleUrls: ['./simple-post.component.css']
})
export class SimplePostComponent implements OnInit {

  constructor(private http:HttpClient) { }
  name:any;
  result:any;
  ngOnInit(): void {
  }

  postData(){
    let url="http://httpbin.org/post";
    this.http.post(url,{
      name:this.name
    }).toPromise().then((data:any)=>{
      console.log(data);
      this.result=JSON.stringify(data.json.name)
    })
  }
}
