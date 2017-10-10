///<reference path="./../../../node_modules/@types/chrome/index.d.ts" />

import { Component, OnInit } from '@angular/core';

import { trigger, state, useAnimation, transition } from '@angular/animations';
import { bounceIn, fadeIn } from 'ng-animate';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
  animations: [
    trigger('bookmarkState', [
      transition('void => *', useAnimation(fadeIn, {
        params: { timing: 0.3 }
      }))
    ])
  ]
})
export class BookmarksComponent implements OnInit {

  bookmarks: Array<any> = [];
  parent: Array<any> = [];
  bookmarkState: any;

  constructor() { }

  ngOnInit() {
    // this.fakeData();
    this.renderTree();
    console.log(chrome);
  }

  renderTree () {
    if (!chrome.bookmarks) { return; }

    chrome
      .bookmarks
      .getTree((tree) => {
        console.log(tree);
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
    this.bookmarks = [];
    chrome
      .bookmarks
      .getChildren(id, (children: Array<any>) => {
        this.bookmarks = children;
        console.log(this.bookmarks);
      });
  }

  regTitle (str) {
    return str.replace(/(\_.+)/, '').replace(/(\(.+)/, '').replace(/(\|.+)/, '').replace(/(\-.+)/, '');
  }

  fakeData () {
    this.bookmarks = [
      { dateAdded: 1379060916447, id: '7', index: 0, parentId: '1', title: '美团网_团购网_每天团购一次_好口碑放心团_MeiTuan.com', url: 'http://www.ted.com' },
      { dateAdded: 1379060916447, id: '7', index: 0, parentId: '1', title: '打架吧鬼神 (2016)720p|1080p迅雷下载-高清下载-免费下载-界绍部', url: 'http://www.ted.com' },
      { children: [{ title: 'second' }], title: 'has child', id: 2 }
    ];
  }
}
