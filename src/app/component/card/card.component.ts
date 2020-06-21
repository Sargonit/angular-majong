import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// enum AnimationState {
//   viewBorderAnim = 'viewBorderAnim',
//   hideBorderAnim = 'hideBorderAnim',
//   viewNumberAnim = 'viewNumberAnim',
//   hideNumberAnim = 'hideNumberAnim',
//   over = 'over'
// }

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
      // transition('hideBorderAnim => viewBorderAnim', [
      //   animate('0.2s')
      // ]),
      // transition('viewBorderAnim => hideBorderAnim', [
      //   animate('0.2s')
      // ]),
      state('viewNumberAnim', style({
        opacity: '1',
      })),
      state('hideNumberAnim', style({
        opacity: '0',
      })),
      // transition('hideNumberAnim => viewNumberAnim', [
      //   animate('0.2s')
      // ]),
      // transition('viewNumberAnim => hideNumberAnim', [
      //   animate('0.2s')
      // ]),
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

export class CardComponent  {
  
  @Input() primeNumber: number;
  @Output() newItemEvent = new EventEmitter<number>();


  isNeedView = false;
  isNeedViewBoxShadow = false;
  // cardValueAnimationState: AnimationState;
  // cardShadowAnimationState: AnimationState;
  isBlocked = false;

  constructor () {
  }

  viewCardValue() {
    this.isNeedView = true;
    this.newItemEvent.emit(this.primeNumber);
  }

  viewBoxShadow() {
    this.isNeedViewBoxShadow = true;
  }

  hideCardValue() {
    this.isNeedView = false;
    this.isNeedViewBoxShadow = false;
  }
}
