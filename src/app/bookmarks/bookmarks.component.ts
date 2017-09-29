///<reference path="./../../../node_modules/@types/chrome/index.d.ts" />

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Array<any> = [];
  parent: Array<any> = [];

  constructor() { }

  ngOnInit() {
    // this.fakeData();
    this.renderTree();
    this.filterParent(this.bookmarks);
  }

  renderTree () {
    if (!chrome.bookmarks) { return; }

    chrome
      .bookmarks
      .getTree((tree) => {
        this.bookmarks = tree[0].children[0].children;
        this.filterParent(this.bookmarks);
        console.log(this.bookmarks);
      });
  }

  filterParent (tree) {
    tree instanceof Array
    ? tree.map((t) => {
      if (!t.children) { return; }
      this.parent.push(t);
      this.filterParent(t.children);
    })
    : ''
    console.log(this.parent);
  }

  onClickFinder ({ id }) {
    if (!id) { return; }
    chrome
      .bookmarks
      .getChildren(id, (children: Array<any>) => {
        this.bookmarks = children;
        console.log(this.bookmarks);
      });
  }

  fakeData () {
    this.bookmarks = [{
      title: 'Bookmarks Bar',
      children: [
        { dateAdded: 1379060916447, id: '7', index: 0, parentId: '1', title: 'TED', url: 'http://www.ted.com' },
        { dateAdded: 1379060916447, id: '7', index: 0, parentId: '1', title: 'TED2', url: 'http://www.ted.com' },
        { children: [{ title: 'second' }], title: 'has child', id: 2 }
      ]
    }, {
      title: 'other Bookmarks',
      id: 1
    }];
  }
}
