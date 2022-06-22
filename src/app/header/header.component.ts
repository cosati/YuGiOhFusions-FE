import { Component, OnInit } from '@angular/core';

import { HandService } from '../hand.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private handService: HandService,
  ) { 
  }

  ngOnInit(): void {
  }

  resetAll() {
    this.handService.clearHand();
    //TODO: clear fusions pane
  }

  updateFilterValue() {
    //this.filterService.updateFilter(this.searchInput);
  }

}
