import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { Card, ICard } from './card';
import { BehaviorSubject } from 'rxjs';

enum StateAnimation {
  viewBorderAnim = 'viewBorderAnim',
  hideBorderAnim = 'hideBorderAnim',
  viewNumberAnim = 'viewNumberAnim',
  hideNumberAnim = 'hideNumberAnim'
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ],
  animations: [
    trigger('clickCard', [
      state('viewBorderAnim', style({
        boxShadow: '0px 0px 8px 5px lightblue',
      })),
      state('hideBorderAnim', style({
        boxShadow: '0px 0px 7px 2px lightgray',
      })),
    ]),
    trigger('viewNumber', [
      state('viewNumberAnim', style({
        opacity: '1',
      })),
      state('hideNumberAnim', style({
        opacity: '0',
      })),
    ])
  ]
})

export class CardComponent implements OnInit {
  
  @Input() id: number;
  @Input() value: number;  
  @Output() cardSettings = new EventEmitter<Card>();
  getCardSettings() {
    if (!this.card.isBlocked.getValue()) {
      this.cardSettings.emit(this.card);
    }
    // this.card.isActive
  }

  stateBorderAnimation: StateAnimation = StateAnimation.viewNumberAnim;
  stateNumberAnimation: StateAnimation = StateAnimation.hideNumberAnim;
  card: Card;

  constructor (private generatopPrimeNumber: GeneratopPrimeNumber) {
  }

  ngOnInit () {
    const cnt: ICard = {
      value: this.value,
      id: this.id,
      isActive: new BehaviorSubject(false),
      isBlocked: new BehaviorSubject(false)
    }
    this.card = new Card(cnt);
    // this.card.isActive.subscribe()    
  } 
}
