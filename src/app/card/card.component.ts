import { Component, Input, OnInit } from '@angular/core';

import { Card } from "../shared/cards";
import { HandService } from '../hand.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() card: Card | undefined;
  constructor(
    private handService: HandService,
  ) { }

  ngOnInit(): void {
  }

  addToCurrentHand(card: Card) {
    this.handService.addToHand(card);
    //TODO alert cart added to hand
  }

  removeCardFromHand(card: Card) {
    this.handService.removeFromHand(card);
  }

  removeAllCardFromHand(card: Card) {
    let hasCard = true;
    while (hasCard) {
      hasCard = this.handService.removeFromHand(card);
    }
  }

}
