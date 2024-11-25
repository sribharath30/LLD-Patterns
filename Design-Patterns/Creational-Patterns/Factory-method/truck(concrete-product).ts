import { Vehicle } from "./vehicle(product)";

export class Truck implements Vehicle {
    drive():void{
        console.log('Driving in a truck')
    }
};