import { Movie } from "./movie";
import { Seat } from "./seat";
import { Theatre } from "./theatre";

export class Show {
    private id: string;
    private movie: Movie;
    private theatre: Theatre;
    private start_time: Date;
    private end_time: Date;
    private seats: Map<string,Seat>;

    constructor(
        id: string,
        movie: Movie,
        theatre: Theatre,
        start_time: Date,
        end_time: Date,
        seats: Map<string,Seat>
    ) {
        this.id = id;
        this.movie = movie;
        this.theatre = theatre;
        this.start_time = start_time;
        this.end_time = end_time;
        this.seats = seats;
    }

    getId(): string {
        return this.id;
    }

    getMovie(): Movie {
        return this.movie;
    }

    getTheatre(): Theatre {
        return this.theatre;
    }

    getStartTime(): Date {
        return this.start_time;
    }

    getEndTime(): Date {
        return this.end_time;
    }

    getSeats(): Map<string,Seat> {
        return this.seats;
    }
}