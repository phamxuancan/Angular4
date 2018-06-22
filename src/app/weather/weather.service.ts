import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class WeatherService{
    constructor( private http : Http ){

    }
    getTem(nameCity){
         const url = 'http://api.openweathermap.org/data/2.5/weather?appid=7005f75cef9ffe5ab9a9c33f2118bce1&&units=metric&q='+nameCity;   
         return this.http.get(url).toPromise()
         .then(res => res.json()).then(res => res.main);
    }
}