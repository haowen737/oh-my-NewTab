import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appWeather]'
})

export class WeatherForecastDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
