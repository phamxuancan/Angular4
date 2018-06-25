import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  info = '';
  listUsers = [];
  constructor(private router:Router ,private http:Http) { }

  ngOnInit() {
    var user  = localStorage.getItem('user');
    if(user != null){
     this.info = JSON.parse(user);
     this.listUser();
   }else{
    this.router.navigate(['/login'])
   }
  }
  listUser(){
      this.http.get('http://localhost/blog/listUser').toPromise().then(res=>res.json()).then(
        response => {
            this.listUsers = response;
          
        }
      )
  }

}
