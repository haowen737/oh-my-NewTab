import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[stage-host]',
})
export class StageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
