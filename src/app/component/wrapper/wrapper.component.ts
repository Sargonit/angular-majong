import { Component } from '@angular/core';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { ICard, Card } from '../card/card';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: [ './wrapper.component.css' ]
})

export class WrapperComponent  {

  private oldCard: Card | null;
  primeNumbers: Array<number>;
  currentActiveCard: BehaviorSubject<Card | null> = new BehaviorSubject(null);

  constructor(private generatopPrimeNumber: GeneratopPrimeNumber){
    this.primeNumbers = this.generatopPrimeNumber.getRandomPrimeNumber();

    this.currentActiveCard.subscribe( card => {
      if (this.oldCard === null) {
        console.log('perviy click');
        this.oldCard = card;
      } else if (this.oldCard === card) {
        console.log(this.oldCard)
        console.log(card)

        console.log('vibral odinakovie');
      } else {
        this.oldCard = null;
        console.log('vibral raznie');
      }
    });
  }

  getActiveCard(card: Card) {   
    this.currentActiveCard.next(card);
  }
}
