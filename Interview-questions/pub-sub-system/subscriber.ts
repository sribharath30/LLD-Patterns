import { Message } from "./message";

export class Subscriber {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    receive(message: Message): void {
        console.log(`Subscriber ${this.id} received: ${message.content}`);
    }
}