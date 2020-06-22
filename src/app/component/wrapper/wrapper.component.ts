import { Component, ViewChild } from '@angular/core';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: [ './wrapper.component.css' ]
})

export class WrapperComponent  {
  
  @ViewChild(Card) set pane(v: Card) {
    setTimeout(() => {
      this.tmp = v.id;
    }, 0);
  }
  tmp
  primeNumbers: Array<number>;

  constructor(private generatopPrimeNumber: GeneratopPrimeNumber){
    this.primeNumbers = this.generatopPrimeNumber.getRandomPrimeNumber();    
  }
}
