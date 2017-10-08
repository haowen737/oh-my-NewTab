import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { trigger, state, useAnimation, transition } from '@angular/animations';

import { bounceIn, fadeOut } from 'ng-animate';

import { StageDirective } from './stage.directive';

import { StageComponent} from './stage.component';

import { Dancer } from './dancer';

@Component({
  selector: 'app-stage-square',
  templateUrl: './stage-square.component.html',
  styleUrls: ['./stage-square.component.css'],
  animations: [
    trigger('stageState', [
      transition('void => *', useAnimation(bounceIn, {
        params: { timing: 0.7 }
      })),
      transition('* => void', useAnimation(fadeOut, {
        params: { timing: 0.7 }
      }))
    ])
  ]
})
export class StageSquareComponent implements AfterViewInit, OnInit {
  @Input() dancer: Dancer[];
  @Input() show: Boolean;
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
    console.log(this.stageHost);
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
