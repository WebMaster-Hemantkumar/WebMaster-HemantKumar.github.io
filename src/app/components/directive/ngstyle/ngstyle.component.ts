import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  isactive:boolean=true;
  ngOnInit(): void {
  }

  task={
    title:"Web Development",
    assignee:{name:"Amit"}
  }

}
