import { Component, Input, OnInit } from '@angular/core';

import { Card } from "../shared/cards";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  addCartToHand(card: Card) {
    window.alert(card.cardName + " added to hand!");
  }

}
