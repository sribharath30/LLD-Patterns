import { Paypal } from "./adaptee/paypal";
import { Stripe } from "./adaptee/stripe";
import { PaypalAdapter } from "./adapters/paypal-adapter";
import { StripeAdapter } from "./adapters/stripe-adapetr";

const paypal = new Paypal();
const paypalAdapter = new PaypalAdapter(paypal);
paypalAdapter.makePayment();

const stripe = new Stripe();
const stripeAdapter = new StripeAdapter(stripe);
stripeAdapter.makePayment();