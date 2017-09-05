import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menus: Menu[] = [{
        icon: 'assets/images/weather.png',
        title: 'Weather',
        id: 0
    }, {
        icon: 'assets/images/bookmarks.png',
        title: 'bookmark',
        id: 1
    }, {
        icon: 'assets/images/favorite.png',
        title: 'favorite',
        id: 1
    }, {
        icon: 'assets/images/history.png',
        title: 'history',
        id: 1
    }];
    constructor() { }

    ngOnInit() {

    }

}