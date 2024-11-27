# Prototype Pattern

The Prototype pattern is a **creational design pattern** that enables the creation of new objects by cloning existing ones, called prototypes. 

---

## **Problem**
When objects are:
- **Expensive to create**, or  
- **Require similar properties**,  
creating new instances from scratch can be inefficient.

---

## **Solution**
The Prototype pattern defines a `Prototype` interface or abstract class with a **cloning method**. The responsibility of creating a copy lies with the prototype object itself.

---

## **Key Components**

1. **Prototype**  
   The interface or abstract class that defines the cloning method.

2. **Concrete Prototype**  
   The class that implements the `Prototype` interface or abstract class.

3. **Client**  
   The entity that uses the `Prototype` object to create new objects.

---

## **How It Works**

1. The **client** requests a new object from the `Prototype` object.
2. The `Prototype` object creates a **copy** of itself using the cloning method.
3. The client receives the new object, which is a copy of the original `Prototype` object.

---

## **Example in TypeScript**

Here's the **Prototype Design Pattern** implemented in **TypeScript** using a clear **Prototype Interface**.

---

### Example: **Shape Prototype**

#### Code:

```typescript
// 1. Prototype Interface
interface Shape {
  clone(): Shape; // Clone method to be implemented by concrete prototypes
  display(): void; // Method to display the shape's details
}

// 2. Concrete Prototype: Circle
class Circle implements Shape {
  constructor(public radius: number, public color: string) {}

  // Implement clone method
  clone(): Shape {
    return new Circle(this.radius, this.color);
  }

  // Display shape details
  display(): void {
    console.log(`Circle with radius: ${this.radius}, color: ${this.color}`);
  }
}

// 3. Concrete Prototype: Rectangle
class Rectangle implements Shape {
  constructor(public width: number, public height: number, public color: string) {}

  // Implement clone method
  clone(): Shape {
    return new Rectangle(this.width, this.height, this.color);
  }

  // Display shape details
  display(): void {
    console.log(
      `Rectangle with width: ${this.width}, height: ${this.height}, color: ${this.color}`
    );
  }
}

// 4. Client Code
const circle1 = new Circle(10, "red");
circle1.display(); // Circle with radius: 10, color: red

// Clone the circle
const circle2 = circle1.clone() as Circle; // Explicitly type the cloned object
circle2.color = "blue"; // Modify the cloned circle
circle2.display(); // Circle with radius: 10, color: blue

const rectangle1 = new Rectangle(5, 10, "green");
rectangle1.display(); // Rectangle with width: 5, height: 10, color: green

// Clone the rectangle
const rectangle2 = rectangle1.clone() as Rectangle;
rectangle2.width = 7; // Modify the cloned rectangle
rectangle2.display(); // Rectangle with width: 7, height: 10, color: green
```

---

#### Output:
```
Circle with radius: 10, color: red
Circle with radius: 10, color: blue
Rectangle with width: 5, height: 10, color: green
Rectangle with width: 7, height: 10, color: green
```


## **Key Insights**
- The **Prototype** pattern reduces the cost of creating objects by reusing existing ones.  
- It is particularly useful in scenarios where object creation is resource-intensive or when multiple objects share similar properties.

