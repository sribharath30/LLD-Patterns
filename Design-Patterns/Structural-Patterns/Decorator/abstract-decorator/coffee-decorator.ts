import { Coffee } from "../abstract-product/coffee";

export interface CoffeeDecorator extends Coffee{
    decoratorCofee: Coffee 
}