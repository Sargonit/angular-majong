export interface ICard {
  readonly value: number;
  readonly id: number;
  isBlocked: boolean;
}

export class Card implements ICard {
  readonly value;
  readonly id;
  isBlocked;

  constructor(cnt: ICard) {
    this.value = cnt.value;
    this.id = cnt.id;
    this.isBlocked = cnt.isBlocked;
  }
}