import { Message } from "./message";
import { Subscriber } from "./subscriber";

export class Topic {
    private subscribers: Subscriber[] = [];

    constructor(private readonly name: string) {}

    getName(): string {
        return this.name;
    }

    addSubscriber(subscriber: Subscriber): void {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: Subscriber): void {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    notifySubscribers(message: Message): void {
        this.subscribers.forEach(subscriber => subscriber.receive(message));
    }
}