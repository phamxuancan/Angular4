import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  providers:[CookieService]
})
export class RegisterComponent implements OnInit {
isLogin  = this.cookieService.get('isLogin');
  constructor(private http:Http,private cookieService:CookieService) { }

  ngOnInit() {
  }
  submitRegister(formRegister){
    this.http.get('http://localhost/chatbot/test').
    toPromise()
    .then(res=>res.json()).then(response => 
      {
        this.isLogin = 'login';
        this.cookieService.set( 'isLogin', 'login' );
      }
    )
  }
}
