export interface ICard {
  readonly value: number;
  readonly id: number;
  isActive: boolean;
}

export class Card implements ICard {
  readonly value;
  readonly id;
  isActive;

  constructor(cnt: ICard) {
    this.value = cnt.value;
    this.id = cnt.id;
    this.isActive = cnt.isActive;
  }
}