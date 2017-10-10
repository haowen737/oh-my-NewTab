import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-normal',
  templateUrl: './weather-normal.component.html',
  styleUrls: ['./weather-normal.component.css']
})
export class WeatherNormalComponent implements OnInit {
  @Input() data: any;
  forecast: Array<any> = [];
  weather: Object = {};

  constructor() { }

  ngOnInit() {
    const data = this.data;
    this.forecast = data.forecast;
    this.weather = data.weather;
  }
}
