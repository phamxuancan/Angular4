import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[CookieService]
})
export class LoginComponent implements OnInit {
  cookieValue = '';
  info = '';

  constructor(private router:Router) { }

  ngOnInit() {
    var user  = localStorage.getItem('user');
   if(user != null){
     this.info = JSON.parse(user);
     this.router.navigate(['/info'])
   }
  }
  onSubmit(formSignIn){
    console.log(this.cookieValue);
    
  }
  
}
