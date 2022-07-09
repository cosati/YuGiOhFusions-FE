import { Component, OnInit } from '@angular/core';
import { FusionService } from '../fusion.service';
import { HandService } from '../hand.service';
import { Fusion } from '../shared/fusion';

@Component({
  selector: 'app-fusions',
  templateUrl: './fusions.component.html',
  styleUrls: ['./fusions.component.scss'],
})
export class FusionsComponent implements OnInit {
 
  constructor(
    public fusionService: FusionService,
    private handService: HandService,
  ) { }

  ngOnInit(): void {
  }

  findFusions() {
    this.fusionService.getFusions(this.handService.getCurrentCards()).subscribe(data => {
      this.fusionService.addFusions(data);
    });
  }

  onFusionApplied() {
    this.fusionService.fusions = [];
  }

}
