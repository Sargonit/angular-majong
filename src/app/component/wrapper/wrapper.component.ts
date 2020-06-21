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

    this.currentActiveCard.subscribe( card => {
      console.log(card);
      card.isActive.next(true);
      if (this.oldCard === null) {
        console.log('perviy');
        this.oldCard = card;
        // card.isActive.next(true);
      } else {
        const isDifferentId = this.oldCard.id !== card.id;
        const isSimilarValue = this.oldCard.value === card.value;
        if (isDifferentId && isSimilarValue) {
          this.oldCard.isBlocked.next(true);
          card.isBlocked.next(true);
          console.log('odinakovie');
        } else {
          console.log('raznie');
        }
        this.oldCard = null;
      } 
    });
  }

  getActiveCard(card: Card) {   
    this.currentActiveCard.next(card);
  }
}
