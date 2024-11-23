/** 
 * Bad example which violates dependency inversion
 * The below example works well only when there is a single payment service.
 * This creates tech debt when we add a new payment service from paypal.
 * Since there is a tight coupling we violate the dependency inversion principle 
 */

class BuyItems {
    stripePayment: StripePayment;
    constructor(){
        this.stripePayment = new StripePayment();
    }

    purchase(){
        this.stripePayment.pay();
    }
}

class StripePayment {
    pay(){
        console.log('stripe payement done')
    }
}

/**
 * The solution to this to provide an abstraction layer which reduces the
 * coupling between the higher level and lower level classes.In this case we can create a
 * new Interface called payment processor which abstracts the payment logic for both
 * paypal and stripe
 */

interface paymentProcessor {
    pay()
}

class StripePaymentNew implements paymentProcessor {
    pay(){
        console.log('stripe payment done')
    }
}

class PaypalPaymentNew implements paymentProcessor {
    pay(){
        console.log('paypal payment done')
    }
}

class PurchaseItemsNew {
    paymentProcessor: paymentProcessor
    constructor(paymentProcessor: paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    purchase() {
        this.paymentProcessor.pay();
    }
}

const stripePayment = new StripePaymentNew();
const paypalPayment = new PaypalPaymentNew();

const purchaseWithStripe = new PurchaseItemsNew(stripePayment);
purchaseWithStripe.purchase(); // Output: Stripe payment done

const purchaseWithPaypal = new PurchaseItemsNew(paypalPayment);
purchaseWithPaypal.purchase(); // Output: Paypal payment done