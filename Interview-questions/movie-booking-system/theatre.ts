import { Show } from "./show";

export class Theatre {
    private id: string;
    private name: string;
    private location: string;
    private shows: Show[];

    constructor(id: string, name: string, location: string) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.shows = [];
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getLocation(): string {
        return this.location;
    }

    getShows(): Show[] {
        return this.shows;
    }
}