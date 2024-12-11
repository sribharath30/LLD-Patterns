import { User } from './user';
import { Comment } from './comment';
import * as uuid from 'uuid';
import { Question } from './question';

export class Answer {
  id: string;
  content: string;
  question: Question;
  author: User;
  votes: number;
  comments: Comment[];
  createdDate: string;
  isAccepted: boolean;

  constructor(author: User, question: Question, content: string) {
    this.id = uuid.v4();
    this.author = author;
    this.content = content;
    this.createdDate = Date.toString();
    this.question = question;
    this.votes = 0;
    this.comments = [];
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
  vote() {
    this.votes += 10;
  }
  getVoteCount() {
    return this.votes;
  }
  getComments() {
    return this.comments;
  }
  markAsAccepted() {
    this.isAccepted = true;
  }

  getId() {
    return this.id;
  }
  getAuthor() {
    return this.author;
  }
  getQuestion() {
    return this.question;
  }
  getContent() {
    return this.content;
  }
  getCreationDate() {
    return this.createdDate;
  }
  getisAccepted() {
    return this.isAccepted;
  }
}
