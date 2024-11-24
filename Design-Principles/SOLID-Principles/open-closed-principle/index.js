// The Open/Closed Principle (OCP) is one of the SOLID principles of object-oriented design. 
// It states that software entities (classes, modules, functions, etc.) should be open for extension 
// but closed for modification. This means we should be able to add new functionality to a class 
// without altering its existing code, ensuring stability and reducing the risk of introducing bugs.

// Initial implementation that violates the OCP
class Print {
    print() {
      console.log("*****");
    }
  }
  
  // Attempting to add new functionality by modifying the existing class
  // This violates the Open/Closed Principle because we are changing the Print class directly,
  // making it dependent on a subclass (PrintWithColors) and adding conditions to handle new functionality.
  class Print {
    constructor() {}
    print() {
      if (this instanceof PrintWithColors) {
        console.log("*****--print with colors"); // Added logic for a specific case
      } else {
        console.log("*****-print without colors"); // Default behavior
      }
    }
  }
  
  class PrintWithColors extends Print {
    constructor() {
      super();
    }
  }
  
  // Correct implementation following the Open/Closed Principle
  // The existing Print class remains unchanged. Instead, we extend its functionality
  // by creating a new class that overrides the behavior of the `print` method.
  
  class Print {
    constructor() {}
    print() {
      console.log("*****-print without colors"); // Original behavior
    }
  }
  
  // New functionality is added by creating a subclass (PrintWithColors) 
  // and overriding the print method. This approach does not require modifying the existing Print class.
  class PrintWithColors extends Print {
    constructor() {
      super();
    }
    print() {
      console.log("*****--print with colors"); // Extended behavior
    }
  }
  
  // Benefits of this approach:
  // - The existing class (Print) is closed for modification, preserving its integrity.
  // - The system is open for extension by adding new subclasses like PrintWithColors or others in the future.
  // - Reduces the risk of introducing bugs in the existing functionality while enabling new behaviors.
  
  // Usage:
  const basicPrint = new Print();
  basicPrint.print(); // Output: *****-print without colors
  
  const coloredPrint = new PrintWithColors();
  coloredPrint.print(); // Output: *****--print with colors
  