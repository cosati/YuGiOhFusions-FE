import { Component, OnInit } from '@angular/core';
import { FusionService } from '../fusion.service';

import { HandService } from '../hand.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HandService, FusionService]
})
export class HeaderComponent implements OnInit {

  constructor(
    private handService: HandService,
    private fusionService: FusionService,
  ) { 
  }

  ngOnInit(): void {
  }

  resetAll() {
    this.handService.clearHand();
    this.fusionService.clearFusions();
  }

}
