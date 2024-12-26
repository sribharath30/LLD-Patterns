export enum TRANSACTION_TYPE {
  WITHDRAWAL,
  DEPOSIT,
  TRANSFER,
  BALANCE_INQUIRY,
}
export class Transaction {
  private timeStamp: Date;
  constructor(
    private type: TRANSACTION_TYPE,
    private amount: number,
    private accountNumber: string,
    private status: boolean,
  ) {
    this.timeStamp = new Date();
  }
}
