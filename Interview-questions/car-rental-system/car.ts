import * as uuid from 'uuid';
export class Car {
  private id: string;
  private model: string;
  private year: string;
  private licensePlate: string;
  private rentalPrice: number;

  constructor(
    model: string,
    year: string,
    licensePlate: string,
    rentalPrice: number,
  ) {
    this.id = uuid.v4();
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.rentalPrice = rentalPrice;
  }

  getId(): string {
    return this.id;
  }
  getModel(): string {
    return this.model;
  }

  getYear(): string {
    return this.year;
  }

  getLicensePlate(): string {
    return this.licensePlate;
  }

  getRentalPrice(): number {
    return this.rentalPrice;
  }
}
