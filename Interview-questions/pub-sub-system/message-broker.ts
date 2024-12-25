import { Subscriber } from "./subscriber";
import { Message } from "./message";
import { Topic } from "./topic";

export class MessageBroker {
    private topics: Map<string, Topic> = new Map();

    createTopic(topicName: string): void {
        if (!this.topics.has(topicName)) {
            this.topics.set(topicName, new Topic(topicName));
        }
    }

    publish(topicName: string, message: Message): void {
        const topic = this.topics.get(topicName);
        if (topic) {
            topic.notifySubscribers(message);
        }
    }

    subscribe(topicName: string, subscriber: Subscriber): void {
        if (!this.topics.has(topicName)) {
            this.createTopic(topicName);
        }
        this.topics.get(topicName)?.addSubscriber(subscriber);
    }

    unsubscribe(topicName: string, subscriber: Subscriber): void {
        this.topics.get(topicName)?.removeSubscriber(subscriber);
    }
}