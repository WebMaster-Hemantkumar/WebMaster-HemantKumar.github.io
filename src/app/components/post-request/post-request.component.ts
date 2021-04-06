import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {
  postId: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example',name:'hemant' }).subscribe(data => {
            this.postId = data.id;
        })
  }

}
