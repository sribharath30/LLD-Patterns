# Interface Segregation Principle (ISP) - SOLID Principles

The **Interface Segregation Principle (ISP)** focuses on designing interfaces in object-oriented programming to avoid forcing classes to implement methods they don't use. ISP states:

> A class should not be forced to implement interfaces it does not use.

In essence, interfaces should be small, specific, and cohesive. This ensures that implementing classes only need to provide methods relevant to their context.

---

## The Problem: Violating the Interface Segregation Principle

Let's illustrate a violation of ISP with an example. Imagine we are developing a media player application in TypeScript. 

We start with a single interface `MediaPlayer`:

```typescript
interface MediaPlayer {
  playAudio(): void;
  recordAudio(): void;
}
```

### Implementation 1: AudioPlayer

We implement the `MediaPlayer` interface in a class called `AudioPlayer`:

```typescript
class AudioPlayer implements MediaPlayer {
  playAudio() {
    // Implementation for playing audio
  }

  recordAudio() {
    // Implementation for recording audio
  }
}
```

### Implementation 2: VideoPlayer

Now, we create another class `VideoPlayer` for playing videos:

```typescript
class VideoPlayer implements MediaPlayer {
  playAudio() {
    // Implementation for playing audio of the video
  }

  recordAudio() {
    // This method is irrelevant for video playback
  }
}
```

### Problem Analysis

In this scenario, the `VideoPlayer` class is **forced to implement the `recordAudio` method**, even though it has no meaningful use for it. This violates ISP, leading to:

- Confusion: Unused methods in the class.
- Maintenance Issues: Changes to the `recordAudio` method in `MediaPlayer` can impact unrelated classes like `VideoPlayer`.
- Unnecessary Dependencies: Forces `VideoPlayer` to deal with irrelevant functionality.

---

## The Solution: Applying the Interface Segregation Principle

To adhere to ISP, we refactor our interfaces to be more specific and focused. In this example, we split `MediaPlayer` into separate interfaces for audio and video functionality:

```typescript
interface AudioPlayer {
  playAudio(): void;
  recordAudio(): void;
}

interface VideoPlayer {
  playVideo(): void;
}
```

### Updated Implementations

Now, each class implements only the interface relevant to its functionality:

#### AudioPlayer Class
```typescript
class AudioPlayer implements AudioPlayer {
  playAudio() {
    // Implementation for playing audio
  }

  recordAudio() {
    // Implementation for recording audio
  }
}
```

#### VideoPlayer Class
```typescript
class VideoPlayer implements VideoPlayer {
  playVideo() {
    // Implementation for playing video
  }
}
```

---

## Benefits of Applying ISP

1. **Maintainability**: Classes are only responsible for methods they need, making code easier to update.
2. **Cohesion**: Interfaces are focused on specific responsibilities, reducing confusion.
3. **Reduced Risk of Errors**: No irrelevant methods to implement or maintain.
4. **Scalability**: New interfaces can be added without affecting unrelated classes.

---

By following the Interface Segregation Principle, we create a cleaner and more maintainable codebase that aligns with the core principles of SOLID design.
```
