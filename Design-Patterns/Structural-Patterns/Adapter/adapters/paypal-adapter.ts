import { Paypal } from "../adaptee/paypal";
import { paymentProcessor } from "../target-interface/payment-processor";

export class PaypalAdapter implements paymentProcessor {
    paymentMethod: Paypal;
    constructor(payPal: Paypal){
        this.paymentMethod = payPal;
    }
    makePayment() {
        this.paymentMethod.makePayment();
    }
    
}