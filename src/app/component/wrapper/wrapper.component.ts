import { Component } from '@angular/core';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: [ './wrapper.component.css' ]
})

export class WrapperComponent  {

  primeNumbers: Array<number>;
  clickedValue: number = 0;

  constructor(private generatopPrimeNumber: GeneratopPrimeNumber){
    this.primeNumbers = this.generatopPrimeNumber.getRandomPrimeNumber();
  }

  getCardValue(cardValue) {

    console.log(cardValue)
  }
}
