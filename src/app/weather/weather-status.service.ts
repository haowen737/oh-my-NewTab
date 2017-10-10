import { Injectable } from '@angular/core';

import { WeatherStatus } from './weather-status';

import { WeatherEmptyComponent } from './weather-empty.component';
import { WeatherLoadingComponent } from './weather-loading.component';
import { WeatherNormalComponent } from './weather-normal.component';

@Injectable()
export class WeatherStatusService {
  getStatusFamily () {
    return [
      new WeatherStatus(WeatherLoadingComponent),
      new WeatherStatus(WeatherNormalComponent),
      new WeatherStatus(WeatherEmptyComponent),
    ];
  }
}
