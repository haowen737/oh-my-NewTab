import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchService } from './../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [SearchService]
})

export class SearchBarComponent implements OnInit {
  constructor(
    private searchService: SearchService
  ) { }

  searchData = '';

  ngOnInit () {
    console.log(1);
  }

  onKeyup (val) {
    this.search(val);
  }
  search (data) {
    this.searchService.getSuggestion(data);
  }
}
