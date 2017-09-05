import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
    clockHour: String = '-';
    clockMin: String = '-';
    updateDateTime = new EventEmitter<any>();
    clock = null;

    constructor() { }

    ngOnInit() {
        this.initClock();
    }

    initClock () {
        const lastHour = this.clockHour;
        const lastMin = this.clockMin;
        this.clock = window.setInterval(() => {
            this.renderTime(lastHour, lastMin);
        }, 1000);
    }

    renderTime (lastHour, lastMin) {
        const currentDate = new Date();
        this.clockHour = currentDate.getHours().toString();
        this.clockMin = currentDate.getMinutes().toString();
        // this.dataTime = currentDate.getTime();
    }
}