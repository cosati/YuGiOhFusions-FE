import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HandService } from '../hand.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInput: string = "";

  constructor(
    private handService: HandService,
  ) { 
  }

  ngOnInit(): void {
  }

  clearSearchBox() {
    this.searchInput = "";
  }

  resetAll() {
    this.clearSearchBox();
    this.handService.clearHand();
    //TODO: clear fusions pane
  }
}
