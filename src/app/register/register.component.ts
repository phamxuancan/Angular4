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
isLogin  = false;
info = '';
messageError = '';
  constructor(private http:Http,private cookieService:CookieService,private router:Router) { }

  ngOnInit() {
   var user  = localStorage.getItem('user');
   if(user != null){
     this.info = JSON.parse(user);
     this.router.navigate(['/info']);
     this.isLogin = true;
   }
  }
  submitRegister(formRegister){
    var value = formRegister.value;
    this.http.post('http://localhost/blog/register',value).
    toPromise()
    .then(res=>res.json()).then(response => 
      {
        if(response.code == 1){
          this.isLogin  = true;        
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/info'])
        }else{
          this.messageError = response.message;
        }
      }
    )
  }
}
