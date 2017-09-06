import { Component, OnInit } from '@angular/core';

import { SearchBarComponent } from './../search-bar/search-bar.component';
import { ClockComponent } from './../clock/clock.component';
import { MenuComponent } from './../menu/menu.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
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

    onStageClose () {
        this.stageState = 'hide';
    }
}
