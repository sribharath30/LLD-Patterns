import { Factory } from "./Factory";

const factory = new Factory();
const bike = factory.createVehicle('bike');
const car = factory.createVehicle('car');
const truck = factory.createVehicle('truck');

bike?.drive();
car?.drive();
truck?.drive();