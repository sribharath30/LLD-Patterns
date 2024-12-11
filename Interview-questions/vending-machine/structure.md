# Vending Machine Design using State Pattern

The vending machine has four states:
- **Idle State**
- **Ready State**
- **Dispensed State**
- **Return Change State**

## Classes and Their Responsibilities

### 1. `Coin`
Attributes:
- `private value: float`

Methods:
- `getValue(): float`

---

### 2. `Note`
Attributes:
- `private value: float`

Methods:
- `getValue(): float`

---

### 3. `Interface State`
Defines the state-specific behavior methods:

- `void selectProduct(Product product)`
- `void insertCoin(Coin coin)`
- `void insertNote(Note note)`
- `void dispenseProduct(Product product)`
- `void returnChange()`

---

### 4. States
#### a. IdleState
Attributes:
- `private vendingMachine`

Methods:
- `void selectProduct(Product product)`
- `void insertCoin(Coin coin)` → throws exception
- `void insertNote(Note note)` → throws exception
- `void dispenseProduct(Product product)` → throws exception
- `void returnChange()` → throws exception

---

#### b. ReadyState
Attributes:
- `private vendingMachine`

Methods:
- `void selectProduct(Product product)` → throws exception
- `void insertCoin(Coin coin)`
- `void insertNote(Note note)`
- `void dispenseProduct(Product product)` → throws exception
- `void returnChange()` → throws exception

---

#### c. DispenseState
Attributes:
- `private vendingMachine`

Methods:
- `void selectProduct(Product product)` → throws exception
- `void insertCoin(Coin coin)` → throws exception
- `void insertNote(Note note)` → throws exception
- `void dispenseProduct(Product product)`
- `void returnChange()` → throws exception

---

#### d. ReturnChangeState
Attributes:
- `private vendingMachine`

Methods:
- `void selectProduct(Product product)` → throws exception
- `void insertCoin(Coin coin)` → throws exception
- `void insertNote(Note note)` → throws exception
- `void dispenseProduct(Product product)` → throws exception
- `void returnChange()`

---

### 5. Inventory
Attributes:
- `private productMap: Record<string, number>`

Constructor:
- Initializes `productMap` as an empty record.

Methods:
- `void addProduct(Product product)`
- `void removeProduct(Product product)`
- `void updateQuantity(Product product, quantity: int)`
- `int getQuantity(Product product)`
- `bool isAvailable(Product product)`

### 5. Product
Attributes:
- `private name`
- `private price`

Constructor:
    - Initializes `name` and `price`

Methods:
- `getName()`
- `getPrice()`

---

### 7. VendingMachine (Singleton)
Attributes:
- `private inventory: Inventory`
- `private final VendingMachineState idleState`
- `private final VendingMachineState readyState`
- `private final VendingMachineState dispenseState`
- `private final VendingMachineState returnChangeState`
- `private VendingMachineState currentState`
- `private Product selectedProduct`
- `private double totalPayment`
- `private static VendingMachine vendingMachineInstance`

Constructor:
- Initializes all states and sets the default state to `idleState`.
- Initializes inventory, selected product, and payment to default values.

Methods:
- **State Transition Methods:**
  - `void setState(State state)`
  - `State getReadyState()`
  - `State getDispenseState()`
  - `State getReturnChangeState()`

- **Product Selection and Reset:**
  - `void selectProduct(Product product)`
  - `void setSelectedProduct(Product product)`
  - `void resetSelectedProduct()`

- **Payment Management:**
  - `double getTotalPayment()`
  - `void addCoin(Coin coin)`
  - `void addNote(Note note)`
  - `void resetPayment()`

- **State-Specific Methods:**
  - `void insertCoin(Coin coin)`
  - `void insertNote(Note note)`
  - `void dispenseProduct(Product product)`
  - `void returnChange()`
