import { MovieBookingSystem } from './booking-system';
import { Movie } from './movie';
import { Theatre } from './theatre';
import { User } from './user';
import { Show } from './show';
import { Seat, SEAT_TYPE } from './seat';

// Create a demo booking system
const bookingSystem = MovieBookingSystem.getInstance();

// Create sample movie and theater with proper IDs
const movie = new Movie("MOV001", "Avengers: Endgame", "Epic superhero movie", "180");
const theatre = new Theatre("TH001", "PVR", "Mumbai");

// Add movie and theatre to the system
bookingSystem.addMovie(movie);
bookingSystem.addTheatre(theatre);

// Create seats for the show
const seats = new Map<string, Seat>();
for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
        const seatId = `SEAT_${row}_${col}`;
        const seatType = row <= 5 ? SEAT_TYPE.PREMIUM : SEAT_TYPE.ECONOMY;
        const price = seatType === SEAT_TYPE.PREMIUM ? 200 : 100;
        seats.set(seatId, new Seat(seatId, row, col, seatType, price));
    }
}

// Create a show
const startTime = new Date();
const endTime = new Date(startTime.getTime() + 180 * 60000); // 180 minutes later
const show = new Show("SHOW001", movie, theatre, startTime, endTime, seats);
bookingSystem.addShow(show);

// Create a user
const user = new User("USER001", "John Doe", "john@example.com");

// Book some tickets with error handling
async function handleBooking() {
    try {
        // Select seats to book (for example, first two seats)
        const selectedSeats = Array.from(seats.values()).slice(0, 2);
        
        // Add debug logging
        console.log('Selected seats:', selectedSeats.map(seat => ({
            id: seat.getId(),
            isBooked: seat.isBooked()
        })));
        
        // Check if seats are available before booking
        const areSeatsAvailable = selectedSeats.every(seat => !seat.isBooked());
        
        if (!areSeatsAvailable) {
            console.log("Selected seats are not available");
            return;
        }
        
        // Add debug logging
        console.log('Attempting to book tickets for show:', show.getId());
        
        // Book tickets
        const booking = bookingSystem.bookTickets(user, show, selectedSeats);
        
        // Add null check and debug logging
        if (!booking) {
            console.log("Booking returned null - possible issue with bookingSystem.bookTickets");
            return;
        }

        console.log("Booking created:", booking);
        
        // Mark seats as booked
        selectedSeats.forEach(seat => {
            seat.book();
            console.log(`Marked seat ${seat.getId()} as booked`);
        });
        
        // Confirm the booking
        const confirmed = bookingSystem.confirmBooking(booking.getId());
        console.log("Booking confirmation result:", confirmed);
        
    } catch (error) {
        console.error("Booking failed:", error);
        if (error instanceof Error) {
            console.error("Error stack:", error.stack);
        }
    }
}

handleBooking();