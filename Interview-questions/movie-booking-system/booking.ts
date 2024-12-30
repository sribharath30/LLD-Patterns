import { Seat } from "./seat";
import { Show } from "./show";
import { User } from "./user";

export enum BOOKING_STATUS {
    IN_PROGRESS = 'in-progress',
    PENDING='pending',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled'
}

export class Booking {
    private id: string;
    private user: User;
    private show: Show;
    private seats: Seat[];
    private totalPrice: number;
    private bookingStatus: BOOKING_STATUS;

    constructor(
        id: string,
        user: User,
        show: Show,
        seats: Seat[],
        totalPrice: number,
        bookingStatus: BOOKING_STATUS = BOOKING_STATUS.IN_PROGRESS
    ) {
        this.id = id;
        this.user = user;
        this.show = show;
        this.seats = seats;
        this.totalPrice = totalPrice;
        this.bookingStatus = bookingStatus;
    }

    // Getters
    getId(): string {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getShow(): Show {
        return this.show;
    }

    getSeats(): Seat[] {
        return this.seats;
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }

    getBookingStatus(): BOOKING_STATUS {
        return this.bookingStatus;
    }

    // Setter for booking status
    setBookingStatus(status: BOOKING_STATUS): void {
        this.bookingStatus = status;
    }
}