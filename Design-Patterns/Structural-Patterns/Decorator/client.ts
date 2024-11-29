import { MilkDecorator } from "./concrete-decorator/milk-decorator";
import { BasicCoffee } from "./concrete-product/basic-coffee";

const coffee = new BasicCoffee();
coffee.make();
const milkCoffee = new MilkDecorator(coffee);
milkCoffee.make(); //extending new features dynamically 