import { Book } from "./book";

export class Member {
    private id: string;
    private name: string;
    private contactInfo: string;
    private books: Book[];

    constructor(id: string, name: string, contactInfo: string) {
        this.id = id;
        this.name = name;
        this.contactInfo = contactInfo;
        this.books = [];
    }
    borrowBooks(book: Book){
        this.books.push(book);
    }
    returnBook(book: Book) {
        this.books = this.books.filter(b => book.getId() != b.getId());
    }
    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getContactInfo(): string {
        return this.contactInfo;
    }

    getBooks(): Book[] {
        return this.books;
    }
}