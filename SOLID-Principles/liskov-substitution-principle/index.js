/*
LSP states that the we can substitute parent and sub class but it should ensure the correctness
*/

/* 
    Bad example of this should be below:
*/
class Bird {
  fly() {
    console.log("bird is flying");
  }
}
class chicken extends Bird {
  chip() {
    console.log("bird is chipping");
  }
}
class penguin extends Bird {
  fly() {
    throw new Error("penguin cannot fly"); //This error is a flag that we're violating the 3rd rule.
  }
  swim() {
    console.log("I can SWIM!");
  }
}

/* 
    Correct example of this should be:
*/

class flyBird {
  fly() {
    console.log("bird is flying");
  }
}
class SwinBird {
  swim() {
    console.log("bird is swimming");
  }
}

class chicken extends flyBird {
  chip() {
    console.log("bird is chipping");
  }
}

class penguin extends swimBird {} // no violation here
