import { Injectable } from '@angular/core';
import { Card } from './shared/cards';

@Injectable({
  providedIn: 'root'
})
export class HandService {
  currentHand: Card[] = [];

  constructor() { }

  addToHand(card: Card) {
    card.addedToHand++;
    this.currentHand.push(card);
  }

  removeFromHand(card: Card) {
    let index = this.currentHand.indexOf(card, 0);
    if (index > -1) {
      this.currentHand.splice(index, 1);
      card.addedToHand--;
      return true;
    }
    return false;
  }

  getCurrentCards() {
    return this.currentHand;
  }

  clearHand() {
    this.currentHand.forEach(function(card) {
      card.addedToHand = 0;
    });
    this.currentHand = [];
    return this.currentHand;
  }
}
