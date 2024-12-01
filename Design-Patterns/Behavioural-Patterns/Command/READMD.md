The **Command Pattern** is a behavioral design pattern that encapsulates a request as an object, allowing you to parameterize objects with different requests, delay the execution of a request, or support undoable operations. It's especially useful for implementing undo/redo functionality, queuing operations, or logging requests.

Here's how you can implement the **Command Pattern** in TypeScript:

### Example: A Simple Remote Control System

We will simulate a remote control that can turn a light on and off.

---

#### Step 1: Define the Command Interface

```typescript
interface Command {
    execute(): void;
    undo(): void; // Optional, for undoable commands
}
```

---

#### Step 2: Create Receiver

The receiver is the object that will perform the actual operations.

```typescript
class Light {
    turnOn(): void {
        console.log("The light is ON");
    }

    turnOff(): void {
        console.log("The light is OFF");
    }
}
```

---

#### Step 3: Create Concrete Command Classes

Each concrete command encapsulates a request by invoking methods on the receiver.

```typescript
class TurnOnLightCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }

    undo(): void {
        this.light.turnOff();
    }
}

class TurnOffLightCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOff();
    }

    undo(): void {
        this.light.turnOn();
    }
}
```

---

#### Step 4: Create the Invoker

The invoker stores commands and executes them.

```typescript
class RemoteControl {
    private command: Command | null = null;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        if (this.command) {
            this.command.execute();
        }
    }

    pressUndo(): void {
        if (this.command) {
            this.command.undo();
        }
    }
}
```

---

#### Step 5: Client Code

The client creates commands, sets them on the invoker, and interacts with the invoker.

```typescript
// Client Code
const light = new Light();

const turnOnCommand = new TurnOnLightCommand(light);
const turnOffCommand = new TurnOffLightCommand(light);

const remote = new RemoteControl();

// Turn on the light
remote.setCommand(turnOnCommand);
remote.pressButton(); // Output: "The light is ON"

// Undo the operation
remote.pressUndo(); // Output: "The light is OFF"

// Turn off the light
remote.setCommand(turnOffCommand);
remote.pressButton(); // Output: "The light is OFF"

// Undo the operation
remote.pressUndo(); // Output: "The light is ON"
```

---

### Key Points:

1. **Encapsulation of Requests**: Commands encapsulate all details of a request, such as the receiver and the actions to perform.
2. **Loose Coupling**: The invoker (e.g., `RemoteControl`) doesn't need to know the details of the commands it executes, just the `Command` interface.
3. **Undo Functionality**: By implementing an `undo` method in commands, we can reverse their effects.
4. **Extensibility**: Adding new commands is straightforward—just implement the `Command` interface.

This implementation demonstrates how to use the Command Pattern in TypeScript effectively!