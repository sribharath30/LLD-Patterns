```markdown
# Liskov Substitution Principle (LSP) - SOLID Principles

The **Liskov Substitution Principle (LSP)** states:

> If you have a parent class (base class) and a child class (subclass), you should be able to use the child class wherever the parent class is expected without causing errors or unexpected behavior.

---

## The Problem: Violating the LSP

Let's consider an example with a `Bird` base class and two subclasses, `Chicken` and `Penguin`.

### Code Example: Violating LSP

#### Base Class and Subclasses
```javascript
// 1️⃣ BASE CLASS
class Bird {
  fly() {
    console.log('I can FLY!');
  }
}

// 2️⃣ SUBCLASS
class Chicken extends Bird {
  chip() {
    console.log('I can CHIP!');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Penguin cannot fly!');
  }

  swim() {
    console.log('I can SWIM!');
  }
}
```

#### Function to Make Birds Fly
```javascript
function makeBirdFly(bird) {
  bird.fly();
}
```

#### Testing the Code
```javascript
const chicken = new Chicken();
const penguin = new Penguin();

makeBirdFly(chicken); // ✅ 'I can FLY!'
makeBirdFly(penguin); // 🚨 ERROR: 'Penguin cannot fly!'
```

### Problem Analysis

- The `makeBirdFly` function expects an instance of the `Bird` class, but the `Penguin` class violates this expectation because penguins cannot fly.
- This causes an error when we try to call `makeBirdFly(penguin)`.
- As per LSP, every subclass should behave correctly when used in place of the base class. Since the `Penguin` class does not fulfill this requirement, we are **violating LSP**.

---

## The Solution: Applying the Liskov Substitution Principle

To fix this violation, we need to refactor our code so that each subclass correctly represents its behavior without violating the expectations of the base class. Instead of having a single `Bird` base class, we create separate base classes for flying and swimming birds.

### Refactored Code: Adhering to LSP

#### New Base Classes
```javascript
class FlyBird {
  fly() {
    console.log('I can FLY!');
  }
}

class SwimBird {
  swim() {
    console.log('I can SWIM!');
  }
}
```

#### Subclasses
```javascript
class Chicken extends FlyBird {
  chip() {
    console.log('I can CHIP!');
  }
}

class Penguin extends SwimBird {}
```

#### Updated Functions
```javascript
function makeBirdFly(bird) {
  bird.fly();
}

function makeBirdSwim(bird) {
  bird.swim();
}
```

#### Testing the Refactored Code
```javascript
const penguin = new Penguin();
const chicken = new Chicken();

makeBirdFly(chicken); // ✅ 'I can FLY!'
makeBirdSwim(penguin); // ✅ 'I can SWIM'
```

---

## Why This Works

- By separating `FlyBird` and `SwimBird`, we ensure that each subclass only inherits the behavior it supports.
- The `Chicken` class inherits from `FlyBird`, so it can fly without issues.
- The `Penguin` class inherits from `SwimBird`, so it can swim without any unexpected behavior.

This refactor adheres to the Liskov Substitution Principle because:

1. **FlyBird and SwimBird are used consistently:**  
   Any instance of `FlyBird` works with `makeBirdFly`, and any instance of `SwimBird` works with `makeBirdSwim`.

2. **Subclasses behave correctly when substituted:**  
   Substituting a `Chicken` or `Penguin` for their respective base classes does not result in errors or unexpected behavior.

---

## Summary

The **Liskov Substitution Principle** ensures that:

- Subclasses can replace their parent class without causing errors or incorrect behavior.
- By separating `FlyBird` and `SwimBird`, we allow `Chicken` and `Penguin` to adhere to LSP.

### Final Example
```javascript
const swimBird = new SwimBird();
const flyBird = new FlyBird();

makeBirdFly(flyBird); // ✅ 'I can FLY!'
makeBirdSwim(swimBird); // ✅ 'I can SWIM!'
```

This ensures our design is both **correct** and **maintainable**, fully aligning with the Liskov Substitution Principle.
```