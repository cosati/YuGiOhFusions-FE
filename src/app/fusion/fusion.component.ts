import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardService } from '../card.service';
import { FusionService } from '../fusion.service';
import { HandService } from '../hand.service';
import { Card } from '../shared/cards';
import { Fusion } from '../shared/fusion';

@Component({
  selector: 'app-fusion',
  templateUrl: './fusion.component.html',
  styleUrls: ['./fusion.component.scss']
})
export class FusionComponent implements OnInit {
  
  @Input() fusion: Fusion | undefined;
  @Output() fusionApplied = new EventEmitter<any>();
  constructor(
    private cardService: CardService,
    private handService: HandService,
  ) { }

  ngOnInit(): void {
  }

  onFusionApplied() {
    this.handService.removeFromHand(this.fusion.firstCard);
    this.handService.removeFromHand(this.fusion.secondCard);
    this.fusionApplied.emit();
  }

  applyFusion(fusion: Fusion) {
    console.log(fusion);
    this.handService.removeFromHand(fusion.firstCard);
    this.handService.removeFromHand(fusion.secondCard);
    let index = this.cardService.cards.findIndex(c => c.id == fusion.monster.id);
    this.handService.addToHand(this.cardService.cards[index]);
    this.fusionApplied.emit();
  }

}
