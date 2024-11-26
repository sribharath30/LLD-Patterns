import { Vehicle } from "./vehicle(product)";

export class Car implements Vehicle {
    drive():void{
        console.log('Driving in a car')
    }
};