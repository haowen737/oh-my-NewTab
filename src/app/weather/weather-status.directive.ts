import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[weather-status-host]'
})

export class WeatherStatusDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
