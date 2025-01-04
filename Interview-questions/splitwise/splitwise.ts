import { Expense } from './expense';
import { Group } from './group';
import { EqualSplit } from './split/equal-split';
import { PercentageSplit } from './split/percentage-split';
import { Split } from './split/split';
import { User } from './user';

export class Splitwise {
    private static instance: Splitwise;
    private users: Map<string, User>;
    private groups: Map<string, Group>;
    private transactionCounter : number

    private constructor() {
        this.users = new Map();
        this.groups = new Map();
        this.transactionCounter = 0;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Splitwise();
        }
        return this.instance;
    }

    addUser(user: User) {
        this.users.set(user.getId(), user);
    }

    addGroup(group: Group) {
        this.groups.set(group.getId(), group);
    }

    addExpense(groupId: string, expense: Expense) {
        const group = this.groups.get(groupId);
        if (group) {
            group.addExpense(expense);
            this.splitExpense(expense);
            this.updateBalances(expense);
        }
    }

    splitExpense(expense: Expense) {
        const amount = expense.getAmount();
        const splits = expense.getSplit();
        const totalSplits = splits.length;

        for (const split of splits) {
            if (split instanceof EqualSplit) {
                const value = amount / totalSplits;
                split.setAmount(value);
            } else if (split instanceof PercentageSplit) {
                split.setAmount(amount * (split.getPercentage() / 100));
            }
        }
    }

    updateBalances(expense: Expense) {
        for(const split of expense.getSplit()){
            const paidBy = expense.getUser();
            const user = split.getUser();
            const amount = split.getAmount();

            if(paidBy != user){
                this.updateBalance(paidBy,user,amount);
                this.updateBalance(user,paidBy,-amount);
            }
        }
    }

    updateBalance(user1: User, user2: User, amount: number): void {
        const key = this.getBalanceKey(user1, user2);
        const currentBalance = user1.getBalances().get(key) || 0;
        user1.getBalances().set(key, currentBalance + amount);
    }

    getBalanceKey(user1: User, user2: User): string{
        return user1.getId() + user2.getId();
    }



    settleBalance(userId1: string, userId2: string): void {
        const user1 = this.users.get(userId1);
        const user2 = this.users.get(userId2);

        if (user1 && user2) {
            const key = this.getBalanceKey(user1, user2);
            const balance = user1.getBalances().get(key) || 0.0;

            if (balance > 0) {
                this.createTransaction(user1.getId(), user2.getId(), balance);
                user1.getBalances().set(key, 0.0);
                user2.getBalances().set(this.getBalanceKey(user2, user1), 0.0);
            } else if (balance < 0) {
                this.createTransaction(user2.getId(), user1.getId(), Math.abs(balance));
                user1.getBalances().set(key, 0.0);
                user2.getBalances().set(this.getBalanceKey(user2, user1), 0.0);
            }
        }
    }

    private createTransaction(senderId: string, receiverId: string, amount: number): void {
        const transactionId = this.generateTransactionId();
        // Process the transaction
        console.log(`Transaction Created: ${transactionId}, Sender: ${senderId}, Receiver: ${receiverId}, Amount: ${amount}`);
    }

    private generateTransactionId(): string {
        this.transactionCounter++;
        return `TRN${this.transactionCounter.toString().padStart(6, "0")}`;
    }
}
