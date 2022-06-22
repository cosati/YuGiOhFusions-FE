import { Component, OnInit } from '@angular/core';
import { cards, Card } from '../shared/cards';

import { HandService } from '../hand.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards = cards;
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
