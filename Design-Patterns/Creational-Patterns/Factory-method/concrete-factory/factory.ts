import { Bike } from "../concrete-products/bike(concrete-product)";
import { Car } from "../concrete-products/car(concrete-product)";
import { Truck } from "../concrete-products/truck(concrete-product)";
import { Vehicle } from "../abstract-product/vehicle(product)";

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