import { Component, OnInit } from '@angular/core';
import {Http, Jsonp} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  providers:[CookieService]
})
export class RegisterComponent implements OnInit {
isLogin  = localStorage.getItem('isLogin');
isLogind  = false;
info = '';

  constructor(private http:Http,private cookieService:CookieService,private router:Router) { }

  ngOnInit() {
   var user  = localStorage.getItem('user');
   if(user != null){
     this.info = JSON.parse(user);
     this.router.navigate(['/info'])
   }
  }
  submitRegister(formRegister){
    this.http.get('http://localhost/blog/register').
    toPromise()
    .then(res=>res.json()).then(response => 
      {
        this.isLogin = 'login';
        localStorage.setItem( 'isLogin', this.isLogin  );
        this.isLogind  = true;        
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/info'])
      }
    )
  }
}
