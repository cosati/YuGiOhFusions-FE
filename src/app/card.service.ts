import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './shared/cards';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private baseUrl = "http://localhost:8080/YuGiOhFusions/cards";
  public cards : Card[];

  constructor(
    private httpClient: HttpClient) {}

  fetchCards() {
    return this.httpClient.get(this.baseUrl)
      .pipe(map(responseData => {
        const cardsArray: Card[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            cardsArray.push({ ...responseData[key] });
          }
        }
        return cardsArray;
      })
    );
  }

  removeOneFromHand(card: Card) {
    let index = this.cards.indexOf(card, 0);
    if (index > -1) {
      this.cards[index].addedToHand--;
      return true;
    }
    return false;
  }
}
