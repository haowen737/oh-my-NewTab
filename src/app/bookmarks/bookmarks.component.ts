import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  template: './bookmarks.component.html',
  styles: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('book marks init');
  }
}
