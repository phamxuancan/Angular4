import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers:[WeatherService]
})
export class WeatherComponent implements OnInit {
  myCity = '';
  nameCity = '';
  temp = null;
  test = '';
  isLoading = false;
  constructor(private weatherservice:WeatherService) { }

  ngOnInit() {
    
  }
  checkWearth(){
    this.isLoading = true;
    this.nameCity =  this.myCity;
    this.weatherservice.getTem(this.nameCity)
    .then(tem => {
      this.temp = tem.pressure;
      this.test = tem.temp;
      this.isLoading = false;
    }).catch(err => {
      var obj = JSON.parse(err._body);
      console.log(err._body);
      console.log(obj);
      this.isLoading = false;
      this.nameCity = '';
       
    });
  }
  getMessage(){
    if(this.isLoading == true){
      return 'loading';
    }
    return this.nameCity == ''?'Enter nameCity please' : ('The current temperature is '+ this.temp+' in ' + this.nameCity + this.test) ;
  }

}
