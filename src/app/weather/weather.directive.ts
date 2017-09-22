import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appWeather]'
})

export class WeatherDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
