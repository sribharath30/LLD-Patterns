import { Split } from "./split/split";
import { User } from "./user";

export class Expense{
    private id: string;
    private desc: string;
    private amount: number;
    private user: User;
    private split: Split[];

    constructor(id: string, desc: string, amount: number, user: User) {
        this.id = id;
        this.desc = desc;
        this.amount = amount;
        this.user = user;
        this.split = [];
    }

    public getId(): string {
        return this.id;
    }

    public getDesc(): string {
        return this.desc;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getUser(): User {
        return this.user;
    }


    public getSplit(): Split[] {
        return this.split;
    }

    public setSplit(split: Split): void {
        this.split.push(split);
    }
}