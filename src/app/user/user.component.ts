import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = '';
  isSquare = true;
  constructor() { }

  ngOnInit() {
  }
  evenStyle = {color:'red'};
  oddStyle = {color:'blue'};
}
