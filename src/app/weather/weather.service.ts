import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class WeatherService {
  private weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22hangzhou%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

  constructor(private http: Http) { }

  updateWeather(): Promise<any> {
    return this
            .http.get(this.weatherApi)
            .toPromise();
  }

  private handleError (err: any): Promise<any> {
    console.log(err);
    return Promise.reject(err.mas || err);
  }

}
