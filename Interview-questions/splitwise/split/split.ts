import { User } from "../user";

export class Split {
    protected user: User;
    protected amount: number;

    constructor(user: User){
        this.user = user;
    }
    getUser(): User {
        return this.user;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }
}
