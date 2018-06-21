import { Component, OnInit } from '@angular/core';
import { IpService } from '../ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers : [IpService]
})
export class IpComponent {
  ip:string;
  constructor(private ispserrvice : IpService) { }

  ngOnInit() {
    this.ispserrvice.getIP()
      .then(res => this.ip = res)
      .catch(err => console.log(err));
  }

}
