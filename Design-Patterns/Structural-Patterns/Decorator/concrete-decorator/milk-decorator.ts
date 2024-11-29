import { CoffeeDecorator } from '../abstract-decorator/coffee-decorator';
import { Coffee } from '../abstract-product/coffee';

export class MilkDecorator implements CoffeeDecorator {
  decoratorCofee: Coffee;
  constructor(coffee: Coffee) {
    this.decoratorCofee = coffee;
  }
  make(): void {
    this.decoratorCofee.make();
    console.log('applying coffee');
  }
}
