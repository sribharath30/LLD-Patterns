export enum SEAT_TYPE{
    PREMIUM = 'premium',
    ECONOMY = 'economy'
}

export class Seat {
    private id: string;
    private row: number;
    private column: number;
    private seatType: SEAT_TYPE;
    private price: number;
    private booked: boolean = false;

    constructor(id: string, row: number, column: number, seatType: SEAT_TYPE, price: number) {
        this.id = id;
        this.row = row;
        this.column = column;
        this.seatType = seatType;
        this.price = price;
    }

    // Getters
    getId(): string {
        return this.id;
    }

    getRow(): number {
        return this.row;
    }

    getColumn(): number {
        return this.column;
    }

    getSeatType(): SEAT_TYPE {
        return this.seatType;
    }

    getPrice(): number {
        return this.price;
    }

    isBooked(): boolean {
        return this.booked;
    }

    book(): void {
        this.booked = true;
    }

    unbook(): void {
        this.booked = false;
    }

    setBooked(status: boolean): void {
        this.booked = status;
    }
}