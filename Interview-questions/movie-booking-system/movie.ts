export class Movie {
    private id: string;
    private name: string;
    private desc: string;
    private duration: string;

    constructor(id: string, name: string, desc: string, duration: string) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.duration = duration;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDesc(): string {
        return this.desc;
    }

    getDuration(): string {
        return this.duration;
    }
}
