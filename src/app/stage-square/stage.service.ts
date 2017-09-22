import { Injectable } from '@angular/core';

import { WeatherComponent } from './../weather/weather.component';
import { BookmarksComponent } from './../bookmarks/bookmarks.component';
import { Dancer } from './dancer';

@Injectable()
export class StageService {
  getDancers() {
    return [
      new Dancer(WeatherComponent, { name: 'weather' }),
      new Dancer(BookmarksComponent, { name: 'Bookmarks' })
    ];
  }
}
