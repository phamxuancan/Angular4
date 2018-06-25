import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {  Http } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[CookieService]
})
export class LoginComponent implements OnInit {
  cookieValue = '';
  info = '';
  messageError = '';

  constructor(private router:Router,private http : Http) { }

  ngOnInit() {
    var user  = localStorage.getItem('user');
   if(user != null){
     this.info = JSON.parse(user);
     this.router.navigate(['/info'])
   }
  }
  onSubmit(formSignIn){
    var value = formSignIn.value;
    this.http.post('http://localhost/blog/login',value).
    toPromise()
    .then(res=>res.json()).then(response => 
      {
        if(response.code == 1){    
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/info'])
        }else{
          this.messageError = response.message;
        }
      }
    )
  }
  
}
