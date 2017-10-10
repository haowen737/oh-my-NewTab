import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { WeatherService } from './weather.service';
import { IpLocationService } from './iplocation.service';
import { WeatherStatusService } from './weather-status.service';

import { WeatherStatusDirective } from './weather-status.directive';

import { WeatherStatus } from './weather-status';

import { WeatherStatusComponent } from './weather-status.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  @ViewChild(WeatherStatusDirective) weatherStatusHost: WeatherStatusDirective;
  weather = {};
  forecast: Array<any> = [];
  status: Number = 0;
  // weatherStatus: 0 loading, 1 normal, 2 empty
  weatherStatus: WeatherStatus[] = this.weatherStatusService.getStatusFamily();

  constructor(
    private weatherService: WeatherService,
    private weatherStatusService: WeatherStatusService,
    private ipLocationService: IpLocationService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent(0);
    this.getIpLocation();
    this.updateWeather();
  }

  loadComponent(id, data = {}) {
    const viewContainerRef = this.weatherStatusHost.viewContainerRef;
    viewContainerRef.clear();

    const weatherStatus = this.weatherStatus[id];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(weatherStatus.component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<WeatherStatusComponent>componentRef.instance).data = data;
  }

  getIpLocation () {
    this
      .ipLocationService
      .getIplocation()
      .then((res) => {
        const result = res.json();
        console.log(result);
      });
  }

  updateWeather () {
    this
      .weatherService
      .updateWeather()
      .then((res) => {
        const weather = res.json().query.results;
        if (!weather) {
          this.handleEmpty();
          return;
        }
        this.processWeather(weather);
      });
  }

  processWeather ({ channel }) {
    const forecast = [].concat(channel.item.forecast).slice(0, 5);
    const weather = Object.assign({}, forecast[0]);
    this.loadComponent(1, { forecast, weather });
  }

  handleEmpty () {
    console.log(this.weatherStatusHost);
    this.loadComponent(2);
  }
}
