import { Circle } from "./concrete-products/circle";
import { Rectangle } from "./concrete-products/rectangle";

const circle1 = new Circle(10,'red') as Circle;
const circle2 = circle1.clone() as Circle;
console.log(circle1);
console.log(circle2);
circle2.color = 'blue'
console.log(circle2);

const recatangle1 = new Rectangle(12,5,'blue');
const recatangle2 = recatangle1.clone();
console.log(recatangle2);
console.log(recatangle2);