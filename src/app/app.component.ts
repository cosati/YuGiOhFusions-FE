import { Component, OnInit } from '@angular/core';
import { Card } from './shared/cards';

import { CardService } from './card.service';
import { HandService } from './hand.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CardService, HandService]
})
export class AppComponent implements OnInit {
  title = 'yugioh-fusions';
  search: string;
  cards: Card[] = [];

  constructor(
    private cardService: CardService,
    private handService: HandService,
  ) {}

  ngOnInit(): void {
    this.cardService.fetchCards().subscribe(data => {
     this.cardService.cards = data;
    });
    console.log(this.cardService);
  }

}
