import { Paypal } from "../adaptee/paypal";
import { Stripe } from "../adaptee/stripe";

export interface paymentProcessor{
    paymentMethod: Paypal | Stripe;
    makePayment();
}