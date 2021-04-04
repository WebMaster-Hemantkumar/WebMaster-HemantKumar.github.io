import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-with-push',
  templateUrl: './ng-for-with-push.component.html',
  styleUrls: ['./ng-for-with-push.component.css']
})
export class NgForWithPushComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
users:any=[]
  onCreateUser(uname: { value: any; }){
this.users.push({
  name:uname.value
})
}
onRemoveUser(item: any){
  this.users.splice(item,)
  }


}
