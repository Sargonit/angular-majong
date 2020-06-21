import { Component } from '@angular/core';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { Card } from '../card/card';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: [ './wrapper.component.css' ]
})

export class WrapperComponent  {

  primeNumbers: Array<number>;
  currentActiveCard: Card;

  constructor(private generatopPrimeNumber: GeneratopPrimeNumber){
    this.primeNumbers = this.generatopPrimeNumber.getRandomPrimeNumber();
  }

  getActiveCard(card: Card) {   
    
  }
}
