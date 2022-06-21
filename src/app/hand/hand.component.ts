import { Component, OnInit } from '@angular/core';

import { cards, Card } from '../shared/cards';
import { HandService } from '../hand.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  cards = this.handService.getCurrentCards();

  constructor(
    private handService: HandService,
  ) { }

  ngOnInit(): void {
  }

}
