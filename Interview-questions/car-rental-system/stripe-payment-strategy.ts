import { IPaymentStrategy } from "./abstract-payment-strategy";

export class StripePaymentStrategy implements IPaymentStrategy{
    makePayment(): void {
        console.log('payment made from stripe')
    }
}