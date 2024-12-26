import { BankService } from "./bank-service";

export class AtmService{
    private bankService: BankService;

    constructor(){
        this.bankService = new BankService();
    }

    authenticate(cardNo: string,pinNo: string){
        this.bankService.login(cardNo,pinNo);
    }

    withDraw(cardNo: string,amount: number){
        this.bankService.withDraw(cardNo,amount);
    }

    deposit(cardNo: string,amount: number){
        this.bankService.deposit(cardNo,amount);
    }
}