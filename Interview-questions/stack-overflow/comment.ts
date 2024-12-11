import { User } from './user';
import * as uuid from 'uuid';

export class Comment {
  id: string;
  content: string;
  author: User;
  createdDate: string;
  constructor(author: User, content: string) {
    this.id = uuid.v4()
    this.author = author;
    this.content = content;
  }

      // Getters
      getId() { return this.id; }
      getAuthor() { return this.author; }
      getContent() { return this.content; }
      getCreationDate() { return this.createdDate; }
}
