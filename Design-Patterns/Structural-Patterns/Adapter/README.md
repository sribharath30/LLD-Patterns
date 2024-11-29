The **Adapter Pattern** is a structural design pattern used to allow two incompatible interfaces to work together. It acts as a bridge between two systems or classes, enabling them to communicate without altering their existing code. This pattern is particularly useful when you need to integrate third-party libraries, legacy systems, or systems with incompatible interfaces into your application.

---

### **Key Components of the Adapter Pattern**
1. **Target**: Defines the interface that the client expects.  
2. **Adaptee**: The existing class or interface that needs to be adapted.  
3. **Adapter**: A class that implements the `Target` interface and translates requests to the `Adaptee`.  
4. **Client**: The code that interacts with the `Target` interface.

---

### **Real-Life Example**
An easy and common **real-life example of the Adapter Pattern** is the integration of different payment gateways into an e-commerce website. Each payment gateway (e.g., PayPal, Stripe, Razorpay) has its own API, but the website needs a unified way to process payments.


### **Scenario**
You are building an e-commerce website. Customers can pay using PayPal or Stripe. Both payment gateways have different APIs, so you use the Adapter Pattern to create a unified interface for the payment system.

---

### **Implementation**

#### **Target Interface**
Defines a unified method for processing payments.

```javascript
class PaymentProcessor {
  processPayment(amount) {
    throw new Error("processPayment() must be implemented.");
  }
}
```

---

#### **Adaptee for PayPal**
Represents the PayPal payment gateway.

```javascript
class PayPal {
  makePayment(paypalAmount) {
    console.log(`Paid ${paypalAmount} using PayPal.`);
  }
}
```

---

#### **Adaptee for Stripe**
Represents the Stripe payment gateway.

```javascript
class Stripe {
  payWithStripe(stripeAmount) {
    console.log(`Paid ${stripeAmount} using Stripe.`);
  }
}
```

---

#### **Adapter for PayPal**
Converts the `processPayment()` calls to PayPal's `makePayment()` method.

```javascript
class PayPalAdapter extends PaymentProcessor {
  constructor(paypal) {
    super();
    this.paypal = paypal;
  }

  processPayment(amount) {
    this.paypal.makePayment(amount);
  }
}
```

---

#### **Adapter for Stripe**
Converts the `processPayment()` calls to Stripe's `payWithStripe()` method.

```javascript
class StripeAdapter extends PaymentProcessor {
  constructor(stripe) {
    super();
    this.stripe = stripe;
  }

  processPayment(amount) {
    this.stripe.payWithStripe(amount);
  }
}
```

---

#### **Client Code**
The client can process payments using the unified interface without worrying about the specific payment gateway.

```javascript
// Client code
const paypal = new PayPal();
const paypalAdapter = new PayPalAdapter(paypal);

const stripe = new Stripe();
const stripeAdapter = new StripeAdapter(stripe);

// Process payments
paypalAdapter.processPayment(100); // Output: Paid 100 using PayPal.
stripeAdapter.processPayment(200); // Output: Paid 200 using Stripe.
```

### **When to Use the Adapter Pattern**
- When integrating a new component into an existing system with a different interface.
- When working with third-party libraries or legacy code that doesn’t conform to the desired interface.
- To achieve compatibility between classes without modifying their source code.

---

### **Advantages**
- Promotes reusability by allowing incompatible systems to work together.
- Adapts third-party libraries or legacy systems without changing their code.

### **Disadvantages**
- Can increase complexity if overused.
- Might add an extra layer of abstraction, impacting performance.