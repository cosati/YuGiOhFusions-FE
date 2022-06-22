import { Component, Input, OnInit } from '@angular/core';
import { cards, Card } from '../shared/cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards = cards;

  constructor() { }

  ngOnInit(): void {
  }

  findFilterMatches(input: Card) : any {
    return input.cardName.toLocaleLowerCase().indexOf("") >= 0;
  }

}
