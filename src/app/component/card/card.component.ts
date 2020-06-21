import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { Card } from './card';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ],
  animations: [
        trigger('viewCard', [
      state('viewBorderAnim', style({
        boxShadow: '0px 0px 8px 5px lightblue',
      })),
      state('hideBorderAnim', style({
        boxShadow: '0px 0px 7px 2px lightgray',
      })),
      state('viewNumberAnim', style({
        opacity: '1',
      })),
      state('hideNumberAnim', style({
        opacity: '0',
      })),
    ]),
    trigger('mouseOver', [
      state('over', style({
        boxShadow: '0px 0px 7px 4px lightgray',
      })),
      state('blur', style({
        boxShadow: '0px 0px 7px 2px lightgray',
      })) 
    ])
  ]
})

export class CardComponent implements OnInit {
  
  @Input() value: number;
  @Output() cardSettings = new EventEmitter<Card>(); 

  card: Card;


  constructor (private generatopPrimeNumber: GeneratopPrimeNumber) {
  }

  ngOnInit () {
    this.card = new Card(this.value);
  }

  
}
