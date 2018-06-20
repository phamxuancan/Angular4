import { Component } from '@angular/core';

@Component({
  templateUrl : './word.component.html',
  selector : 'app-word',
  styles : [`
    h3 {color:red}
  `]
})
export class  WordComponent {
  param ="Hello world";
  hi = ["test","lkfjslk","fsdfsd"];
}

