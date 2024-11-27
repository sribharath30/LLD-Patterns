import { Prototype } from '../abstract-prototype';

export class Circle implements Prototype {
  constructor(
    public radius: number,
    public color: string,
  ) {}
  clone(): Prototype {
    return new Circle(this.radius, this.color);
  }
  display(): void {
    console.log(`Circle with radius: ${this.radius}, color: ${this.color}`);
  }
}
