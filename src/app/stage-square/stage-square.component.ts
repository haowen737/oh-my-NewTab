import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { StageDirective } from './stage.directive';

import { StageComponent} from './stage.component';

import { Dancer } from './dancer';

@Component({
  selector: 'app-stage-square',
  templateUrl: './stage-square.component.html',
  styleUrls: ['./stage-square.component.css'],
  animations: [
    trigger('stageState', [
      state('hide', style({
        display: 'none',
        opacity: '0',
        transform: 'scale(1.1)'
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
export class StageSquareComponent implements AfterViewInit, OnInit {
  @Input() dancer: Dancer[];
  @Input() show: String;
  @Output() onClose = new EventEmitter<any>();
  @ViewChild(StageDirective) stageHost: StageDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit() {
    this.getDancers();
  }

  ngOnInit() {

  }

  renderDancer (id) {
    this.loadComponent(id);
  }

  loadComponent(id) {
    // console.log(this.dancers);
    const viewContainerRef = this.stageHost.viewContainerRef;
    viewContainerRef.clear();

    const dancer = this.dancer[id];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dancer.component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<StageComponent>componentRef.instance).data = dancer.data;
  }

  getDancers() {}

  clickClose() {
    this.onClose.emit(null);
  }
}
