import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = 'ac8954c6851f659ba9890515c6398be3';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo(city: string){
    const url = `${ urlBase }?q=${city}&appid=${appId}`;
    return this.http.get(url);
  }
}
