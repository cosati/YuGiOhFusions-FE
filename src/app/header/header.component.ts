import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInput = "";
  currentRoute: string;

  constructor(private router: Router) { 
    //console.log(this.router.url);
  }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  clearSearchBox() {
    this.searchInput = "";
  }

  resetAll() {
    this.clearSearchBox();
    //TODO: clear hand and fusions pane
  }
}
