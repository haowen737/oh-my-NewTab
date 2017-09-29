import { Component, OnInit } from '@angular/core';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    console.log('weather inited');
  }

  updateWeather () {
    this
      .weatherService
      .updateWeather()
      .then((res) => {
        console.log(res);
      });
  }
}
