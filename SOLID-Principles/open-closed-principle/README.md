# Open-Closed Principle Explanation with Example

The **Open-Closed Principle** states that a class should be **open for extension** but **closed for modification**. This means that we should be able to add new functionality to our code by extending existing functionality, without altering the original implementation.

### Example: Vehicle Class

Below is an initial implementation of a `Vehicle` class. When an instance of `Vehicle` is created, we pass in its fuel capacity and fuel efficiency. The range is calculated as:

```javascript
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

const standardVehicle = new Vehicle(10, 15);
console.log(standardVehicle.getRange()); // Outputs '150'

### Violation of the Open-Closed Principle

If we introduce a new type of vehicle, such as a `HybridVehicle`, which has an additional electric range, we might modify the `getRange` method in the `Vehicle` class to account for this:

```javascript
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        let range = this.fuelCapacity * this.fuelEfficiency;

        if (this instanceof HybridVehicle) {
            range += this.electricRange;
        }
        return range;
    }
}

class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'

### Why is this a violation?

The above implementation violates the **Open-Closed Principle** because:

1. **Adding new vehicle types requires modifying the `Vehicle` class**  
   - Every time a new type of vehicle is introduced, the `getRange` method in the `Vehicle` class needs to be updated to account for the new type. This goes against the principle of being "closed for modification."

2. **Tightly coupled code**  
   - The `Vehicle` class has direct knowledge of its subclasses (e.g., `HybridVehicle`), creating a dependency that makes the codebase harder to extend and maintain.

3. **Increased risk of bugs**  
   - Modifying the base `Vehicle` class to accommodate new vehicle types introduces the potential for errors, affecting all existing subclasses.

To adhere to the Open-Closed Principle, we should strive for designs where new behavior can be added without altering existing code.

### Correct Implementation Following the Open-Closed Principle

Instead of modifying the `Vehicle` class, we override the `getRange` method in the `HybridVehicle` subclass. This way, the original class remains unmodified, and the new behavior is encapsulated within the subclass:

```javascript
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    getRange() {
        return (this.fuelCapacity * this.fuelEfficiency) + this.electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'
