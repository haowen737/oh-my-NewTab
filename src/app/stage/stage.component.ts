import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.css'],
    animations: [
        trigger('stageState', [
            state('hide', style({
                display: 'none',
                opacity: '0',
                transform: 'scale(1.1)',
            })),
            state('show', style({
                opacity: '0.8',
                display: 'block',
                transform: 'scale(1)'
            })),
            transition('hide => show', animate('700ms ease')),
            transition('show => hide', animate('700ms ease'))
        ])
    ]
})
export class StageComponent implements OnInit {
    @Input() show: String;
    @Output() onClose = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {

    }

    clickClose () {
        this.onClose.emit(null);
    }
}