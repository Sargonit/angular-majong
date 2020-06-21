import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeneratopPrimeNumber {

  public clickedPrimeNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  private readonly countsOfPrimeNumber = 15;
  private primeNumbers: Array<number> = [];

  constructor() { 
    this.primeNumbers.push(2,3);
    for (let i = 4; i < 50; i+=1) {
      if ((i % 2 !== 0) && (i % 3 !== 0))
        this.primeNumbers.push(i);
    }
  }

  public getRandomPrimeNumber(): Array<number> {
    while (this.primeNumbers.length > this.countsOfPrimeNumber) {
      const spliceIndex = Math.floor(Math.random() * this.primeNumbers.length);
      this.primeNumbers.splice(spliceIndex, 1);
    }
    const duplicatePrimeNumbers = [...this.primeNumbers, ...this.primeNumbers];
    return this.shuffle(duplicatePrimeNumbers);
  }

  private shuffle(arr){
    let j: number;
    let temp: number;
    for (let i = arr.length - 1; i > 0; i--){
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
}