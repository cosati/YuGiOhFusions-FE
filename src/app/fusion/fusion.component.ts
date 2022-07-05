import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../shared/cards';
import { Fusion } from '../shared/fusion';

@Component({
  selector: 'app-fusion',
  templateUrl: './fusion.component.html',
  styleUrls: ['./fusion.component.scss']
})
export class FusionComponent implements OnInit {
  
  @Input() fusion: Fusion | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
