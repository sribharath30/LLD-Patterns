import { Expense } from "./expense";
import { User } from "./user";

export class Group {
    private id: string;
    private name: string;
    private users: User[];
    private expenses: Expense[];

    constructor(id: string, name: string){
        this.id = this.id;
        this.name = name;
        this.users = [];
        this.expenses = [];
    }

    addUser(user: User){
        this.users.push(user);
    }
    addExpense(expense: Expense){
        this.expenses.push(expense);
    }
    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getUsers(): User[] {
        return this.users;
    }

    getExpenses(): Expense[] {
        return this.expenses;
    }
}