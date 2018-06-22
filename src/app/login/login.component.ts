import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CookieService]
})
export class LoginComponent implements OnInit {
  cookieValue = '';
  constructor(private cookieService:CookieService) { }

  ngOnInit() {
    this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
  }
  onSubmit(formSignIn){
    console.log(this.cookieValue);
    
  }
  
}
