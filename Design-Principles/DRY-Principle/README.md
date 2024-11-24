The **DRY Principle** (Don't Repeat Yourself) focuses on reducing code duplication by ensuring that each piece of logic is defined in a single location, making code more maintainable, efficient, and less error-prone.

### Key Points:
1. **Avoid Duplication**: Refactor repeated logic into reusable functions or modules.
2. **Centralize Logic**: Define common functionality once and reuse it.
3. **Improve Maintainability**: Changes are easier since updates need to be made in only one place.

### Example:

#### Without DRY:
```javascript
function rectangleArea(length, width) { return length * width; }
function squareArea(side) { return side * side; }
```

#### With DRY:
```javascript
function calculateArea(type, ...dimensions) {
    if (type === 'rectangle') return dimensions[0] * dimensions[1];
    if (type === 'square') return dimensions[0] ** 2;
}
```

### Benefits:
- **Better readability** and **consistency**.
- **Efficient updates** across the codebase.

DRY also applies beyond code, such as in database design and documentation.