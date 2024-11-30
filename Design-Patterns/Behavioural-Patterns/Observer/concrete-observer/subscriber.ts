import { ISubscriber } from '../abstract-observer/subscriber';

export class Subscriber implements ISubscriber {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(data: any): void {
    console.log(`${this.name} received update:`, data);
  }
}
