import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }
  dataUrl = 'https://jsonplaceholder.typicode.com/users/';

  getAllData() {
    return this.http.get(this.dataUrl);
  }

  getDataById(id:number){
    return this.http.get(this.dataUrl+id);
  }

}
