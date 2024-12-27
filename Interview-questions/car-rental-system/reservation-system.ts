import { Car } from './car';
import { Customer } from './customer';
import { PaymentStrategy } from './payment-strategy';
import { PaypalPaymentStrategy } from './paypal-payment-strategy';
import { Reservation } from './reservation';
import { StripePaymentStrategy } from './stripe-payment-strategy';

export class ReservationSystem {
  private customers: Map<string, Customer>;
  private reservations: Map<string, Reservation>;
  private cars: Map<string, Car>;
  private static instance: ReservationSystem;
  private paymentStrategy: PaymentStrategy;

  constructor() {
    this.reservations = new Map();
    this.cars = new Map();
    this.customers = new Map();
    this.paymentStrategy = new PaymentStrategy();
  }
  public static getInstance() {
    if (!this.instance) {
      this.instance = new ReservationSystem();
    }
    return this.instance;
  }
  addCustomer(
    customerName: string,
    contactDetails: string,
    license_no: string,
  ): string {
    const customer = new Customer(customerName, contactDetails, license_no);
    this.customers.set(customer.getName(), customer);
    return customer.getName();
  }
  addCar(
    model: string,
    year: string,
    licensePlate: string,
    rentalPrice: number,
  ): string {
    const car = new Car(model, year, licensePlate, rentalPrice);
    this.cars.set(car.getId(), car);
    return car.getId();
  }

  searchCar(id: string) {
    return this.cars.get(id);
  }

  addReservation(
    carId: string,
    customerId: string,
    startDate: Date,
    endDate: Date,
  ): string {
    const car = this.cars.get(carId);
    const customer = this.customers.get(customerId)!;
    if (!car) {
      throw new Error('Car is not avaibale');
    }
    const totalPrice = this.getDaysBetweenDates(
      startDate.toString(),
      endDate.toString(),
    );
    const reservation = new Reservation(
      car,
      startDate,
      endDate,
      customer,
      totalPrice * car.getRentalPrice(),
    );
    return reservation.getReservationId();
  }

  deleteReservation(reservationId: string) {
    this.reservations.delete(reservationId);
  }

  makePayment(paymentMethod: 'PayPal' | 'Stripe') {
    if ((paymentMethod = 'PayPal')) {
      this.paymentStrategy.setStrategy(new PaypalPaymentStrategy());
    } else {
      this.paymentStrategy.setStrategy(new StripePaymentStrategy());
    }
    console.log(paymentMethod);
    this.paymentStrategy.executePayment();
  }
  private getDaysBetweenDates(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Difference in milliseconds
    const differenceInMs = end.getTime() - start.getTime();

    // Convert milliseconds to days
    return Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
  }
}
