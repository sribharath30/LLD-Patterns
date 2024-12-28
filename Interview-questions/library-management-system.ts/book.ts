export class Book {
    private id: string;
    private title: string;
    private ISBN: string;
    private author: string;
    private publicationYear: Date;
    private isAvailable: boolean;

    constructor(
        id: string,
        title: string,
        ISBN: string,
        author: string,
        publicationYear: Date,
        isAvailable: boolean = true
    ) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.author = author;
        this.publicationYear = publicationYear;
        this.isAvailable = isAvailable;
    }
    setAvailable(val: boolean): boolean {
        return this.isAvailable = val;
    }

    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getISBN(): string {
        return this.ISBN;
    }

    getAuthor(): string {
        return this.author;
    }

    getPublicationYear(): Date {
        return this.publicationYear;
    }

    getIsAvailable(): boolean {
        return this.isAvailable;
    }
}