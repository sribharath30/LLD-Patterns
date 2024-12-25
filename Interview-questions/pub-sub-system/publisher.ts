import { Message } from "./message";
import { MessageBroker } from "./message-broker";

export class Publisher {
    private broker: MessageBroker;

    constructor(broker: MessageBroker) {
        this.broker = broker;
    }

    publish(topicName: string, message: Message): void {
        this.broker.publish(topicName, message);
    }
}