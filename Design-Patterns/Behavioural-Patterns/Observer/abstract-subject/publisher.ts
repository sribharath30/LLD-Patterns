import { Subscriber } from "../concrete-observer/subscriber";

export interface IPublisher {
  addSubscriber(subscriber: Subscriber): void;
  removeSubscriber(subscriber: Subscriber): void;
  notifySubscribers(data: any): void;
}
