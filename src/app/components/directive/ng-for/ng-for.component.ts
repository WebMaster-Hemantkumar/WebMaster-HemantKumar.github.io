import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users:any[] = [
    {id:101,name:'Rinku',city:'Delhi'},
    {id:101,name:'Hemant',city:'Delhi'},
    {id:101,name:'Mehu',city:'Delhi'},
    {id:101,name:'Manya',city:'Delhi'},
   
    ]

}
