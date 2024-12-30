import { Booking, BOOKING_STATUS } from "./booking";
import { Movie } from "./movie";
import { Seat } from "./seat";
import { Show } from "./show";
import { Theatre } from "./theatre";
import { User } from "./user";

export class MovieBookingSystem {
    private static instance: MovieBookingSystem;
    private movies: Movie[];
    private theatres: Theatre[];
    private shows: Map<string,Show>;
    private bookings: Map<string,Booking>;

    private constructor() {
        this.movies = [];
        this.theatres = [];
        this.shows = new Map<string,Show>();
        this.bookings = new Map<string,Booking>();
    }
    
    static getInstance(): MovieBookingSystem {
        if(!this.instance){
            this.instance = new MovieBookingSystem();
        }
        return this.instance
    }
    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    addTheatre(theatre: Theatre): void {
        this.theatres.push(theatre);
    }

    addShow(show: Show): void {
        this.shows.set(show.getId(), show);
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getTheatres(): Theatre[] {
        return this.theatres;
    }

    getShow(showId: string): Show | undefined {
        return this.shows.get(showId);
    }
    bookTickets(user: User, show: Show, selectedSeats: Seat[]): Booking | null {
        if (this.areSeatsAvailable(show, selectedSeats)) {
            this.markSeatsAsBooked(show, selectedSeats);
            const totalPrice = this.calculateTotalPrice(selectedSeats);
            const bookingId = this.generateBookingId();
            const booking = new Booking(bookingId, user, show, selectedSeats, totalPrice, BOOKING_STATUS.PENDING);
            this.bookings.set(bookingId, booking);
            return booking;
        }
        return null;
    }

    private areSeatsAvailable(show: Show, selectedSeats: Seat[]): boolean {
        for (const seat of selectedSeats) {
            const showSeat = show.getSeats().get(seat.getId());
            if (!showSeat || showSeat.isBooked() == false) {
                return false;
            }
        }
        return true;
    }

    private markSeatsAsBooked(show: Show, selectedSeats: Seat[]): void {
        for (const seat of selectedSeats) {
            const showSeat = show.getSeats().get(seat.getId());
            showSeat?.setBooked(true);
        }
    }

    private calculateTotalPrice(selectedSeats: Seat[]): number {
        return selectedSeats.reduce((sum, seat) => sum + seat.getPrice(), 0);
    }

    private generateBookingId(): string {
        const timestamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 14);
        const randomSuffix = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        return `BOOKING_${timestamp}${randomSuffix}`;
    }

    confirmBooking(bookingId: string): void {
        const booking = this.bookings.get(bookingId);
        if (booking && booking.getBookingStatus() === BOOKING_STATUS.PENDING) {
            booking.setBookingStatus(BOOKING_STATUS.COMPLETED);
        }
    }

    cancelBooking(bookingId: string): void {
        const booking = this.bookings.get(bookingId);
        if (booking && booking.getBookingStatus() !== BOOKING_STATUS.CANCELLED) {
            booking.setBookingStatus(BOOKING_STATUS.CANCELLED);
            this.markSeatsAsAvailable(booking.getShow(), booking.getSeats());
        }
    }

    private markSeatsAsAvailable(show: Show, seats: Seat[]): void {
        for (const seat of seats) {
            const showSeat = show.getSeats().get(seat.getId())!;
            showSeat.setBooked(false);
        }
    }
}