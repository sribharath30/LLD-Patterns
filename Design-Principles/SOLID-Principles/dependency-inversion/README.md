The **Dependency Inversion Principle (DIP)** is one of the **SOLID principles** and focuses on reducing coupling between high-level modules and low-level modules. DIP states:

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

Here’s an example in TypeScript using a **payment system** where the principle is applied. 

---

### Example: Payment Processing System
Suppose we want to process payments using different payment providers (e.g., PayPal, Stripe). By applying the Dependency Inversion Principle, we abstract the payment provider details, allowing our high-level module (e.g., `PaymentService`) to remain independent of specific implementations.

---

#### Step 1: Define an Abstraction (Interface)
We create an interface `IPaymentProvider` that defines the methods every payment provider should implement.

```typescript
// Abstraction for Payment Provider
export interface IPaymentProvider {
  processPayment(amount: number): Promise<boolean>;
}
```

---

#### Step 2: Implement Low-Level Modules
Create concrete implementations for payment providers (e.g., PayPal and Stripe).

```typescript
// PayPal Implementation
export class PayPalPaymentProvider implements IPaymentProvider {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via PayPal.`);
    // Logic for PayPal API integration
    return Promise.resolve(true); // Simulating success
  }
}

// Stripe Implementation
export class StripePaymentProvider implements IPaymentProvider {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via Stripe.`);
    // Logic for Stripe API integration
    return Promise.resolve(true); // Simulating success
  }
}
```

---

#### Step 3: High-Level Module (PaymentService)
The `PaymentService` depends on the abstraction (`IPaymentProvider`) rather than the concrete implementations.

```typescript
// High-level module: PaymentService
export class PaymentService {
  private paymentProvider: IPaymentProvider;

  constructor(paymentProvider: IPaymentProvider) {
    this.paymentProvider = paymentProvider;
  }

  async makePayment(amount: number): Promise<void> {
    const success = await this.paymentProvider.processPayment(amount);
    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed!");
    }
  }
}
```

---

#### Step 4: Use the System
Inject the desired payment provider into the `PaymentService` at runtime, enabling flexibility.

```typescript
// Application code
async function main() {
  // Use PayPal as the payment provider
  const payPalProvider = new PayPalPaymentProvider();
  const paymentService = new PaymentService(payPalProvider);
  await paymentService.makePayment(100);

  // Switch to Stripe as the payment provider
  const stripeProvider = new StripePaymentProvider();
  const paymentServiceWithStripe = new PaymentService(stripeProvider);
  await paymentServiceWithStripe.makePayment(200);
}

main();
```

---

### Key Benefits of DIP in this Example
1. **Flexibility**: Adding new payment providers is easy. Just implement the `IPaymentProvider` interface, and the `PaymentService` remains unchanged.
2. **Testability**: You can mock the `IPaymentProvider` interface for testing without relying on actual payment provider implementations.
3. **Reduced Coupling**: High-level `PaymentService` does not depend directly on PayPal or Stripe, making the system more maintainable.

Would you like further elaboration on this example or integration with other principles?