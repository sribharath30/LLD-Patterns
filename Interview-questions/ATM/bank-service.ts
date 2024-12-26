import { Account } from './Account';

export class BankService {
  accounts: Account[];
  accountsLoggedIn: Map<string, Account>;
  constructor() {
    this.accounts = [];
  }

  addAccount(accountNo: string, cardNo: string, pinNo: string) {
    const account = new Account(accountNo, cardNo, pinNo);
    this.accounts.push(account);
    return account;
  }

  login(cardNo: string, pinNo: string): boolean {
    const account = this.accounts.filter((account) =>
      account.validatePin(pinNo, cardNo),
    );
    if (account[0]) {
      this.accountsLoggedIn.set(cardNo, account[0]);
      return true;
    }
    return false;
  }

  withDraw(cardNo: string, amount: number) {
    const account = this.accountsLoggedIn.get(cardNo);
    if (!account) {
      return false;
    }
    account.debit(amount);
  }

  deposit(cardNo: string, amount: number) {
    const account = this.accountsLoggedIn.get(cardNo);
    if (!account) {
      return false;
    }
    account.credit(amount);
  }

  logout(cardNo: string): boolean {
    if (this.accountsLoggedIn.has(cardNo)) {
      this.accountsLoggedIn.delete(cardNo);
    }
    return true;
  }
}
