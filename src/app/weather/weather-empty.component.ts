import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-empty',
  template: '<div>empty</div>'
})
export class WeatherEmptyComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}