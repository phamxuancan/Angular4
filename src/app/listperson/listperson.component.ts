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
  removeperson(name:string){
    const index = this.listPerson.findIndex(e=>e.name == name);
    this.listPerson.splice(index,1);
  }
}
