import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
@Input() name:string;
@Input() age : number;
@Output() removeThisPerson = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  removepersonByclick(){
    this.removeThisPerson.emit(this.name);
  }
}
