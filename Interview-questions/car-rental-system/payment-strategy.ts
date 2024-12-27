import { IPaymentStrategy } from "./abstract-payment-strategy";
import { PaypalPaymentStrategy } from "./paypal-payment-strategy";

export class PaymentStrategy{
    paymentStrategy: IPaymentStrategy

    constructor(){
        this.paymentStrategy = new PaypalPaymentStrategy();
    }

    setStrategy(strategy: IPaymentStrategy){
        this.paymentStrategy = strategy;
    }
    executePayment(){
        this.paymentStrategy.makePayment();
    }
}