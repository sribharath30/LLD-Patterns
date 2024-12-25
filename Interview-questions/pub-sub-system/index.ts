import { MessageImpl } from "./message";
import { MessageBroker } from "./message-broker";
import { Publisher } from "./publisher";
import { Subscriber } from "./subscriber";

const broker = new MessageBroker();
const publisher = new Publisher(broker);
const sub1 = new Subscriber("SUB1");
const sub2 = new Subscriber("SUB2");

broker.subscribe("topic1", sub1);
broker.subscribe("topic1", sub2);

publisher.publish("topic1", new MessageImpl("Hello World!"));