import { Component, OnInit } from '@angular/core';

import { Card } from '../shared/cards';
import { HandService } from '../hand.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent implements OnInit {

  cards: Card[];

  constructor(
    private handService: HandService,
  ) { }

  ngOnInit(): void {
    this.cards = this.handService.getCurrentCards();
  }

  getUniqueCardList(cards: Card[]): Card[] {
    let uniqueList: Card[] = [];
    cards.forEach(function (card) {
      if (uniqueList.indexOf(card) < 0) {
        uniqueList.push(card);
      }
    });
    return uniqueList;
  }

}
