export class Card {
  readonly value: number;
  isActive: boolean;

  constructor(value: number) {
    this.value = value;
    this.isActive = false;
  }
}