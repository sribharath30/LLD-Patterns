import { User } from "./user";

class Transaction {
    id: string;
    sender: User;
    receiver: User;
    amount: number;

    constructor(id: string, sender: User, receiver: User, amount: number) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
    }
}