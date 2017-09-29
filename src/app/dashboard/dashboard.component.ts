import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { StageSquareComponent } from './../stage-square/stage-square.component';

import { StageService } from './../stage-square/stage.service';
import { Dancer } from './../stage-square/dancer';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <div class="header" [@blur]="stageShow">
        <app-clock></app-clock>
        <app-search-bar></app-search-bar>
      </div>
      <div class="main" [@blur]="stageShow">
        <app-menu (onMenuClick)="onMenuClick($event)"></app-menu>
      </div>
      <app-stage-square
      [show]="stageShow"
      (onClose)="onStageClose($event)"
      [dancer]="dancer"></app-stage-square>
    </div>
  `,
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
  @ViewChild(StageSquareComponent)
  private stageComponent: StageSquareComponent;
  stageShow: String = 'hide';
  dancer: Dancer[] = this.stageService.getDancers();

  constructor(
    private stageService: StageService
  ) { }

  ngOnInit () {
    setTimeout(() => {
      this.onMenuClick(1);
    }, 700);
  }

  onMenuClick (id) {
    this.stageShow = 'show';
    this.stageComponent.renderDancer(id);
  }

  onStageClose (val) {
    this.stageShow = 'hide';
  }
}
