import { Component, OnInit } from '@angular/core';
import { Card } from './shared/cards';

import { CardService } from './card.service';
import { HandService } from './hand.service';
import { FusionService } from './fusion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CardService, HandService, FusionService]
})
export class AppComponent implements OnInit {
  title = 'yugioh-fusions';
  search: string;
  cards: Card[] = [];

  constructor(
    private cardService: CardService,
    private handService: HandService,
    private fusionService: FusionService,
  ) {}

  ngOnInit(): void {
    this.cardService.fetchCards().subscribe(data => {
     this.cardService.cards = data;
    });
  }

}
