import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageUrl  = "https://dantricdn.com/thumb_w/640/2018/6/20/vu-1529458236368706430085.jpg";
  forgot = true;
  toggleForgot(){
    this.forgot = !this.forgot;
  }
}
