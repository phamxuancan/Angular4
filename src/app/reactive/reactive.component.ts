import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  formSignUp : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formSignUp =this.fb.group({
        email:['',this.checkGmail],
        password: ''
    });
  }
  onSubmit(){
      console.log(this.formSignUp.value);
  }
   checkGmail(formControl){
    if(formControl.value.includes('@gmail.com')){
      return null;
    }
    return {gmail:true};
   }
}
 