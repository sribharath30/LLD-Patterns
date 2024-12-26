import { Transaction, TRANSACTION_TYPE } from './transaction';

export class Account {
  private accountNo: string;
  private cardNo: string;
  private pinNo: string;
  private transactions: Transaction[];
  private balance: number;

  constructor(accountNo: string, cardNo: string, pinNo: string) {
    this.accountNo = accountNo;
    this.cardNo = cardNo;
    this.pinNo = pinNo;
    this.balance = 0;
    this.transactions = [];
  }

  validatePin(pinNo: string, cardNo: string) {
    return this.cardNo == cardNo && this.pinNo == pinNo;
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  debit(amount: number) {
    if (amount > this.balance) {
      throw new Error('not enough balance ');
    }
    const transaction = new Transaction(
      TRANSACTION_TYPE.WITHDRAWAL,
      amount,
      this.accountNo,
      true,
    );
    this.transactions.push(transaction);
    this.balance -= amount;
  }
  credit(amount: number) {
    const transaction = new Transaction(
      TRANSACTION_TYPE.DEPOSIT,
      amount,
      this.accountNo,
      true,
    );
    this.transactions.push(transaction);
    this.balance += amount;
  }
  getBalance(): number {
    const transaction = new Transaction(
        TRANSACTION_TYPE.BALANCE_INQUIRY,
        0,
        this.accountNo,
        true,
      );
      this.transactions.push(transaction);
    return this.balance;
  }
}
