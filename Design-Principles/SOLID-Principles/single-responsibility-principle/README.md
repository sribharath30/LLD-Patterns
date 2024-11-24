# Single Responsibility Principle

The **Single Responsibility Principle** states that a class or module should have only a single purpose. This means that a class should only be responsible for one thing. 

For example, if you have a `Wallet` class, that class should only implement wallet functionality. It’s fine to call other functionality, but it shouldn’t be written in the `Wallet` class.

---

## A Bad Example

Below is an example of a class that violates the Single Responsibility Principle.

### Code Example

```javascript
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (...) { // Logic to determine whether or not the car should start
            this.errorLog(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        this.errorLog(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }

    errorLog(message) {
        console.log(message);
    }
}
```
