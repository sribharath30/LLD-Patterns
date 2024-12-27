import { IPaymentStrategy } from "./abstract-payment-strategy";

export class PaypalPaymentStrategy implements IPaymentStrategy{
    makePayment(): void {
        console.log('payment made from paypal');
    }
    
}