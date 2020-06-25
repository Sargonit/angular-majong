import { ReplaySubject } from 'rxjs';
import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { GeneratopPrimeNumber } from '../../service/generator-prime-number.service';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: [ './wrapper.component.css' ]
})

export class WrapperComponent implements AfterViewInit { 
  @ViewChildren(CardComponent)
  cards: QueryList<CardComponent>;

  primeNumbers: ReadonlyArray<number>;

  constructor(private generatopPrimeNumber: GeneratopPrimeNumber){
    this.primeNumbers = this.generatopPrimeNumber.getRandomPrimeNumber();    
  }

  ngAfterViewInit() {
    this.cards.forEach(card => card.isShowCardValue = true);
    setTimeout(()=>{
      this.cards.forEach(card => card.isShowCardValue = false);
    }, 1000)
  }

}
