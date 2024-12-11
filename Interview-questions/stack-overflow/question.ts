import * as uuid from 'uuid';

import { Answer } from './answer';
import { User } from './user';

export class Question {
  id: string;
  title: string;
  content: string;
  author: User;
  answers: Answer[];
  tags: string[];
  comments: Comment[];
  votes: number;
  createdDate: string;

  constructor(author: User, title: string, content: string, tags: string[]) {
    this.id = uuid.v4();
    this.title = title;
    this.content = content;
    this.author = author;
    this.answers = [];
    this.tags = tags;
    this.comments = [];
    this.votes = 0;
    this.createdDate = new Date().getDate().toString();
  }
  addAnswer(answer: Answer) {
    this.answers.push(answer);
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
  getId() {
    return this.id;
  }
  getAuthor() {
    return this.author;
  }
  getTitle() {
    return this.title;
  }
  getAnswers() {
    return this.answers;
  }
  getContent() {
    return this.content;
  }
  getCreationDate() {
    return this.createdDate;
  }
  getTags() {
    return this.tags;
  }
}
