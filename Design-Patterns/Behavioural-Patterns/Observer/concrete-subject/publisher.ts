import { IPublisher } from '../abstract-subject/publisher';
import { Subscriber } from '../concrete-observer/subscriber';

export class Publisher implements IPublisher {
  private subscribers: Subscriber[];
  constructor() {
    this.subscribers = [];
  }
  addSubscriber(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }
  removeSubscriber(subscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((value) => value != subscriber);
  }
  notifySubscribers(data: any): void {
    this.subscribers.map((subscriber) => subscriber.update(data));
  }
}
