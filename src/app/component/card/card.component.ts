import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ],
  animations: [
    trigger('showCardValue', [
      state('show', style({
        justifyContent: 'center',
        alignItems: 'center',
        color: 'lightslategrey',
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),      
    ]),
  ]
})

export class CardComponent  {
  
  @Input() isShowCardValue: boolean;
  @Input() value: number;
  @Input() id: number;

}
