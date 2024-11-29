import { Stripe } from "../adaptee/stripe";
import { paymentProcessor } from "../target-interface/payment-processor";

export class StripeAdapter implements paymentProcessor{
    paymentMethod: Stripe;
    constructor(stripe: Stripe){
        this.paymentMethod = stripe;
    }
    makePayment() {
        this.paymentMethod.pay();
    }
    
}