import { Book } from './book';
import { Member } from './member';

export class LibraryManager {
  private static instance: LibraryManager;
  private catalog: Map<string, Book>;
  private members: Map<string, Member>;

  constructor() {
    this.catalog = new Map();
    this.members = new Map();
  }
  static getInstance(): LibraryManager {
    if (!this.instance) {
      this.instance = new LibraryManager();
    }
    return this.instance;
  }
  addBook(book: Book) {
    this.catalog.set(book.getId(), book);
  }
  removeBook(id: string) {
    if (this.catalog.get(id)) {
      this.catalog.delete(id);
    } else {
      throw new Error('Book with the id does not exist');
    }
  }
  getBook(id: string) {
    return this.catalog.get(id);
  }
  registerMember(member: Member) {
    this.members.set(member.getId(), member);
  }
  removeMember(id: string) {
    if (this.members.get(id)) {
      this.members.delete(id);
    } else {
      throw new Error('Member with the id does not exist');
    }
  }
  getMember(id: string) {
    return this.catalog.get(id);
  }

  borrowBook(bookId: string, memberId: string) {
    const book = this.catalog.get(bookId)!;
    const member = this.members.get(memberId);
    if (book && member && book.getIsAvailable()) {
      if (member?.getBooks().length! < 50) {
        member?.borrowBooks(book);
        book.setAvailable(false);
      } else {
        throw new Error('not allowed to book books beyond 50');
      }
    } else {
      throw new Error('book or member is not available');
    }
  }
  returnBook(bookId: string, memberId: string) {
    const book = this.catalog.get(bookId);
    const member = this.members.get(memberId);
    if (book && member) {
      member.returnBook(book);
      book.setAvailable(true);
    } else {
      throw new Error('Book or member not found');
    }
  }
  searchBook(query: string): Book[] {
    const results: Book[] = [];
    for (const book of this.catalog.values()) {
      if (
        book.getTitle().toLowerCase().includes(query.toLowerCase()) ||
        book.getAuthor().toLowerCase().includes(query.toLowerCase()) ||
        book.getISBN().toLowerCase().includes(query.toLowerCase())
      ) {
        results.push(book);
      }
    }
    return results;
  }
}
