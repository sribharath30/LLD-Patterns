import { LibraryManager } from "./library-manager";
import { Book } from "./book";
import { Member } from "./member";

function main() {
    try {
        // Get library instance
        const library = LibraryManager.getInstance();

        // Create and add books
        const book1 = new Book("B1", "The Hobbit", "ISBN001", "J.R.R. Tolkien", new Date("1937"));
        const book2 = new Book("B2", "1984", "ISBN002", "George Orwell", new Date("1949"));
        const book3 = new Book("B3", "Pride and Prejudice", "ISBN003", "Jane Austen", new Date("1813"));

        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);

        // Register members
        const member1 = new Member("M1", "John Doe", "john@email.com");
        const member2 = new Member("M2", "Jane Smith", "jane@email.com");

        library.registerMember(member1);
        library.registerMember(member2);

        // Borrow books
        console.log("Borrowing books...");
        library.borrowBook("B1", "M1");
        library.borrowBook("B2", "M2");

        // Search for books
        console.log("\nSearching for 'the'...");
        const searchResults = library.searchBook("the");
        searchResults.forEach(book => {
            console.log(`Found: ${book.getTitle()} by ${book.getAuthor()}`);
        });

        // Return a book
        console.log("\nReturning book...");
        library.returnBook("B1", "M1");

        // Try to borrow an unavailable book (should throw error)
        try {
            library.borrowBook("B2", "M1"); // B2 is already borrowed
        } catch (error:any) {
            console.log("\nError:", error.message);
        }

    } catch (error:any) {
        console.error("An error occurred:", error.message);
    }
}

main();