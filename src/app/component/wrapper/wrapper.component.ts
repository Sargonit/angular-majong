import { Component } from '@angular/core';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { Card } from '../card/card';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: [ './wrapper.component.css' ]
})

export class WrapperComponent  {

  private oldCard: Card | null = null;
  primeNumbers: Array<number>;
  currentActiveCard: BehaviorSubject<Card | null> = new BehaviorSubject(null);

  constructor(private generatopPrimeNumber: GeneratopPrimeNumber){
    this.primeNumbers = this.generatopPrimeNumber.getRandomPrimeNumber();    
  }
}
