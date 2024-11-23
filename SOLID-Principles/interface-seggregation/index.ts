// example which violates interface seggregation
interface Birds {
    eat();
    fly();
}

class Chicken implements Birds {
    eat() {
        console.log("eating.....");
    }
    fly() {
        console.log("flying.....")
    }
}

class Penguin implements Birds {
    eat() {
        console.log("eating.....");
    }
    // unnecessary implementation here. User is forced to implement this 
    //  where it does not make any sense for a penguin to fly
    fly() {
        console.log("flying.....")
    }
}

// how can we overcome this

// split the larger interface into sub interfaces

interface FlyBirds {
    eat()
    fly()
}

interface SwinBirds {
    eat()
    swim()
}

class Chickens implements FlyBirds {
    eat() {
        console.log("eating.....");
    }
    fly() {
        console.log("flying.....")
    } 
}

class Penguins implements SwinBirds {
    eat() {
        console.log("eating.....");
    }
    swim() {
        console.log("swimming.....")
    } 
}