The **Decorator Design Pattern** is a structural design pattern that allows you to dynamically add new functionality to an object without altering its structure or modifying its code. It achieves this by wrapping the original object in a new "decorator" object that provides the additional behavior.

### Key Concepts
1. **Core Object**: The original object to which new behavior is added.
2. **Decorator**: A wrapper around the core object that provides additional functionality while preserving the original object's interface.
3. **Composition**: The decorator pattern relies on composition rather than inheritance.

### Benefits
- Enhances an object’s behavior dynamically at runtime.
- Promotes code reusability and adherence to the **Open-Closed Principle** (open for extension, closed for modification).
- Avoids a proliferation of subclasses for every possible combination of behaviors.

### Components
1. **Component**: Defines the interface for objects that can have responsibilities added to them.
2. **Concrete Component**: The original object to which additional behavior is added.
3. **Decorator**: Maintains a reference to a `Component` and defines an interface conforming to `Component`.
4. **Concrete Decorator**: Adds new responsibilities to the component.

```javascript
// Component interface
interface Coffee {
    void make();
}

// Concrete component class
class SimpleCoffee implements Coffee {
    public void make() {
        System.out.println("Making simple coffee...");
    }
}

// Decorator interface
interface CoffeeDecorator extends Coffee {
    Coffee decoratedCoffee;
}

// Concrete decorator class
class MilkDecorator implements CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }

    public void make() {
        decoratedCoffee.make();
        System.out.println("Adding milk...");
    }
}

// Client code
public class CoffeeShop {
    public static void main(String[] args) {
        Coffee coffee = new SimpleCoffee();
        coffee = new MilkDecorator(coffee);
        coffee.make();
    }
}
```

### When to Use
- When you need to add responsibilities to objects dynamically without affecting other instances of the same class.
- To avoid creating a large number of subclasses for every combination of functionality.

The decorator pattern is widely used in libraries and frameworks, such as in middleware in web frameworks (e.g., Express.js), where multiple decorators (middlewares) are applied to a request.



