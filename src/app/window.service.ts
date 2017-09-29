import { Injectable } from '@angular/core';

function _window (): any {
  return window;
}

function _chrome (): any {
  return _window().chrome;
}

@Injectable()
export class WindowService {
  get NativeWindow (): any {
    return _window();
  }
  get NativeChrome (): any {
    return _chrome();
  }
}