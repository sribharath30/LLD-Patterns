import { Car } from './car';
import { Customer } from './customer';
import * as uuid from 'uuid';

export class Reservation {
  private reservationId: string;
  private car: Car;
  private startDate: Date;
  private endDate: Date;
  private customer: Customer;
  private totalPrice: number;

  constructor(
    car: Car,
    startDate: Date,
    endDate: Date,
    customer: Customer,
    totalPrice: number,
  ) {
    this.car = car;
    this.startDate = startDate;
    this.endDate = endDate;
    this.reservationId = uuid.v4();
    this.customer = customer;
    this.totalPrice = totalPrice;
  }

  getReservationId(): string {
    return this.reservationId;
  }

  getCar(): Car {
    return this.car;
  }

  getStartDate(): Date {
    return this.startDate;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
