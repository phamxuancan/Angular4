import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.css']
})
export class ListpersonComponent implements OnInit {
  listPerson = [
    {name:"TÝ",age:12},
    {name:"TÈO",age:11},
    {name:"TŨI",age:22},
  ]
  constructor() { }

  ngOnInit() {
  }

}
