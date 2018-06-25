import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLogin = false;
user = '';
  constructor() { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user != null){
      this.isLogin = true;
      this.user = JSON.parse(this.user);
    }
  }

}
