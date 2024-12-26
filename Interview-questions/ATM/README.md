core components:(High Level)
    - Authenticate using card
    - WithDraw cash
    - Deposit cash
    - Check Bank Balance 

Low level components:
    - Authenticate card for an account
    - check balance from an account
    - wthdraw and deposit acts as a transaction and needs to be stored

Classes:

    - ATM
    - Account
    - Transaction 
    - Bank Service
    - Cash dispenser


Transaction

    ENUM transaction{
        WITHDRAW,
        DEPOSIT,
        BALANCE ENQUIRY,
        TRANSFER
    }

Account:

    Account no: string;
    card no: string;
    Pin no: string;
    balance: number;
    transactions: Transaction[]

    Authenticate(pin no: string, card no: string);
    getBalance();
    debit(amount: number);
    credit(amount: number);



Bank Service

    Accounts: accounts[];

    login(card no: string, pin: string);
    withDraw(amount);
    Deposit()
<!-- 
Cash dispenser
    balance:number

    dispenseCash(amount);
    depositCash(amount); -->
ATM Service
    Bank Service:

    authenticate(card no: string, pin n0: string);
    withDraw

