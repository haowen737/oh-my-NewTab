import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { SearchBarComponent } from './../search-bar/search-bar.component';
import { ClockComponent } from './../clock/clock.component';
import { MenuComponent } from './../menu/menu.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
        trigger('blur', [
            state('hide', style({
                filter: 'blur(0px)'
            })),
            state('show', style({
                filter: 'blur(3px)'
            })),
            transition('hide => show', animate('700ms ease')),
            transition('show => hide', animate('700ms ease'))
        ])
    ]
})

export class DashboardComponent implements OnInit {
    stageState: String = 'hide';
    ngOnInit () {
        // setTimeout(() => {
        //     this.stageState = 'show';
        // }, 2000);
    }

    onMenuActive (id) {
        this.stageState = 'show';
    }

    onStageClose (val) {
        console.log(val);
        this.stageState = 'hide';
    }
}
