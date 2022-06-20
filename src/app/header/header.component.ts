import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInput = "";

  constructor() { }

  ngOnInit(): void {
  }

  clearSearchBox() {
    this.searchInput = "";
  }

  resetAll() {
    this.clearSearchBox();
    //TODO: clear hand and fusions pane
  }

}
