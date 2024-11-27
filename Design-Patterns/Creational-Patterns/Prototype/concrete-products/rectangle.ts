import { Prototype } from '../abstract-prototype';

export class Rectangle implements Prototype {
  constructor(
    public width: number,
    public height: number,
    public color: string,
  ) {}

  clone(): Prototype {
    return new Rectangle(this.width, this.height, this.color);
  }

  display(): void {
    console.log(
      `Rectangle with width: ${this.width}, height: ${this.height}, color: ${this.color}`,
    );
  }
}
