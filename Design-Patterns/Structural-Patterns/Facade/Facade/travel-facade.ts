import { CarRental } from '../concrete-products/car';
import { FlightBooking } from '../concrete-products/flight';
import { HotelBooking } from '../concrete-products/hotel';

export class TravelFacade {
  private flightBooking: FlightBooking;
  private hotelBooking: HotelBooking;
  private carRental: CarRental;
  constructor() {
    this.flightBooking = new FlightBooking();
    this.hotelBooking = new HotelBooking();
    this.carRental = new CarRental();
  }
  bookCompleteTrip(): void {
    console.log('Booking a complete travel package...');
    this.flightBooking.bookFlight();
    this.hotelBooking.bookHotel();
    this.carRental.rentCar();
    console.log('Travel package booked successfully!');
  }
}
