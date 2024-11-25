### Factory Design Pattern

**Key Points:**
- Creating objects of similar type (Vehicle factory creates - car, bike, truck, etc).
- Hides the complexity of creation of objects from the client.
- Client code has no idea about the object creation.

The Factory Pattern is a **creational design pattern** that provides a way to create objects **without specifying the exact class** of object that will be created.

---

### **Problem:**

Imagine you're building a system that needs to create different types of objects, such as cars, bikes, or trucks. Without a factory pattern, you would need to create a separate class for each type of object and instantiate them individually.

---

### **Solution:**

The Factory Pattern introduces a new class, called the **Factory**, which is responsible for creating objects.  
- The Factory class provides a method that returns an object of a specific class, without exposing the underlying logic of object creation.

---

### **Key Components:**

1. **Product**: The interface or abstract class that defines the common characteristics of the objects that will be created.
2. **Concrete Product**: The specific classes that implement the Product interface or abstract class.
3. **Factory**: The class responsible for creating objects of the Concrete Product classes.
4. **Client**: The class that uses the Factory to create objects.

---

### **How it Works:**

1. The Client requests an object from the Factory.
2. The Factory determines which Concrete Product class to instantiate based on the request.
3. The Factory creates an object of the chosen Concrete Product class.
4. The Factory returns the created object to the Client.

---

### **Benefits:**

1. **Decoupling**: The Client is decoupled from the Concrete Product classes.
2. **Polymorphism**: The Factory can return objects of different classes.
3. **Extensibility**: New Concrete Product classes can be added without modifying the Factory or Client.

---

### **Example in Code:**

Suppose we want to create a system that can create different types of vehicles. We can define a `Vehicle` interface and concrete classes like `Car`, `Bike`, and `Truck`.

Here’s the example rewritten in **TypeScript**:

```typescript
// Product interface
interface Vehicle {
  drive(): void;
}

// Concrete Product classes
class Car implements Vehicle {
  drive(): void {
    console.log("Driving a car");
  }
}

class Bike implements Vehicle {
  drive(): void {
    console.log("Riding a bike");
  }
}

class Truck implements Vehicle {
  drive(): void {
    console.log("Driving a truck");
  }
}

// Factory class
class VehicleFactory {
  static createVehicle(type: string): Vehicle | null {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      case "truck":
        return new Truck();
      default:
        return null;
    }
  }
}

// Client class
class Main {
  static main(): void {
    const vehicle: Vehicle | null = VehicleFactory.createVehicle("car");
    if (vehicle) {
      vehicle.drive(); // Output: Driving a car
    }
  }
}

Main.main();
