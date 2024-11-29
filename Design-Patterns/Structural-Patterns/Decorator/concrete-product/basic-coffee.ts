import { Coffee } from "../abstract-product/coffee";

export class BasicCoffee implements Coffee{
    make(): void {
        console.log('making coffee');
    }
}