import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Card } from '../shared/cards';
import { HttpClient } from '@angular/common/http';

import { HandService } from '../hand.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  //cards = cards;
  cards: Card[] = [];
  searchInput: string = "";
  isFetching = false;

  constructor(
    private handService: HandService,
    private cardService: CardService, // being used on template
  ) {}

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
