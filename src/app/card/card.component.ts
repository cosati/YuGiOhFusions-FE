import { Component, Input, OnInit } from '@angular/core';

import { Card } from "../shared/cards";
import { HandService } from '../hand.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card | undefined;
  constructor(
    private handService: HandService,
  ) { }

  ngOnInit(): void {
  }

  addCartToHand(card: Card) {
    window.alert(card.cardName + " added to hand!");
  }

  addToCurrentHand(card: Card) {
    this.handService.addToHand(card);
    //TODO alert cart added to hand
  }

  removeCardFromHand(card: Card) {
    this.handService.removeFromHand(card);
  }

}
