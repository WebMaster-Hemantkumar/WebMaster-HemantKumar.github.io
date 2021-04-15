import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  IfProductAbailabe:boolean=true;
  list=[
    {Name:'TV',Price:50000},
    {Name:'Mobile',Price:50000},
    {Name:'Washing Machine',Price:50000},
  
  ]
  ngOnInit(): void {
  }

}
