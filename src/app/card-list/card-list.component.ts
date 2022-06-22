import { Component, Input, OnInit } from '@angular/core';
import { cards } from '../shared/cards';

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

}
