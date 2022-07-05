import { Component, OnInit } from '@angular/core';

import { Card } from '../shared/cards';
import { HandService } from '../hand.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss'],
})
export class HandComponent implements OnInit {

  cards = this.handService.getCurrentCards();

  constructor(
    private handService: HandService,
  ) { }

  ngOnInit(): void {
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
