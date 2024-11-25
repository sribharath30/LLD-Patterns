import { Vehicle } from "./vehicle(product)";

export class Bike implements Vehicle {
    drive():void{
        console.log('Driving in a bike')
    }
};