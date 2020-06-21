import { BehaviorSubject } from 'rxjs';

export interface ICard {
  readonly value: number;
  readonly id: number;
  isActive: BehaviorSubject<boolean>;
  isBlocked: BehaviorSubject<boolean>;
}

export class Card implements ICard {
  readonly value;
  readonly id;
  isBlocked;
  isActive;

  constructor(cnt: ICard) {
    this.value = cnt.value;
    this.id = cnt.id;
    this.isActive = cnt.isActive;
    this.isBlocked = cnt.isBlocked;
  }
}