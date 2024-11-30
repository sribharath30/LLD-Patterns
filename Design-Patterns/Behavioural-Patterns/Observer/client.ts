import { Subscriber } from "./concrete-observer/subscriber";
import { Publisher } from "./concrete-subject/publisher";

const publisher = new Publisher();
const subscriber1 = new Subscriber('subscriber1');
const subscriber2 = new Subscriber('subscriber2');
const subscriber3 = new Subscriber('subscriber3');

publisher.addSubscriber(subscriber1);
publisher.addSubscriber(subscriber2);
publisher.addSubscriber(subscriber3);

publisher.notifySubscribers(42);
publisher.removeSubscriber(subscriber3);
publisher.notifySubscribers(34);