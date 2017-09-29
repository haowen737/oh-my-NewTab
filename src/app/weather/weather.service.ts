import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class WeatherService {
  private weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast'

  constructor(private http: Http) { }

  updateWeather(): Promise<any> {
    return this
            .http.get(this.weatherApi)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
  }

  private handleError (err: any): Promise<any> {
    console.log(err);
    return Promise.reject(err.mas || err);
  }

}
