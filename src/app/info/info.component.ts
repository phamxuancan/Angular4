import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  info = '';
  constructor() { }

  ngOnInit() {
    var user  = localStorage.getItem('user');
    if(user != null){
     this.info = JSON.parse(user);
   }
  }

}
