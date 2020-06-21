import { Component } from '@angular/core';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: [ './wrapper.component.css' ]
})

export class WrapperComponent  {

  primeNumbers: Array<number>;
  clickedCardValue: number = 0;

  constructor(private generatopPrimeNumber: GeneratopPrimeNumber){
    this.primeNumbers = this.generatopPrimeNumber.getRandomPrimeNumber();
  }

  getCardValue(cardValue: number) {
    if (this.clickedCardValue === 0) {
      this.clickedCardValue = cardValue;
    } else if (this.clickedCardValue === cardValue) {
      // some code for block to card with similar value
    } else {

    }
    
  }
}
