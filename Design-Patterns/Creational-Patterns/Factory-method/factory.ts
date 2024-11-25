import { Bike } from "./Bike(Concrete-product)";
import { Car } from "./Car(Concrete-product)";
import { Truck } from "./Truck(Concrete-product)";
import { Vehicle } from "./vehicle(product)";

export type VehicleType = 'car' | 'bike' | 'truck';
export class Factory {
    constructor(){}
    public createVehicle(type: VehicleType): Vehicle | null{
        switch(type){
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            case 'truck':
                return new Truck();
            default: 
                return null;
        }
    }
}