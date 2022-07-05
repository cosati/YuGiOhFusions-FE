import { Component, OnInit } from '@angular/core';
import { FusionService } from '../fusion.service';
import { HandService } from '../hand.service';
import { Fusion } from '../shared/fusion';

@Component({
  selector: 'app-fusions',
  templateUrl: './fusions.component.html',
  styleUrls: ['./fusions.component.scss'],
  providers: [FusionService, HandService]
})
export class FusionsComponent implements OnInit {
  fusions: Fusion[] = this.fusionService.getFusionList();

  constructor(
    private fusionService: FusionService,
    private handService: HandService,
  ) { }

  ngOnInit(): void {
  }

  findFusions() {
    this.fusionService.getFusions(this.handService.getCurrentCards()).subscribe(data => {
      this.fusionService.addFusions(data);
    });
  }

}
