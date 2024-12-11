import { Answer } from './answer';
import { Question } from './question';
import { Comment } from './comment';
import * as uuid from 'uuid';

export class User {
  id: string;
  username: string;
  email: string;
  questions: Question[];
  answers: Answer[];
  comments: Comment[];

  constructor(username: string, email: string) {
    this.id = uuid.v4();
    this.username = username;
    this.email = email;
    this.questions = [];
    this.comments = [];
    this.answers = [];
  }

  askQuestion(title: string, content: string, tags: string[]) {
    const question = new Question(this, title, content, tags);
    this.questions.push(question);
    return question;
  }
  answerQuestion(question: Question, content: string) {
    const answer = new Answer(this, question, content);
    this.answers.push(answer);
    question.addAnswer(answer);
    return answer;
  }
  addComment(comment: Comment, content: string): Comment {
    const obj = new Comment(this, content);
    this.comments.push(comment);
    // obj.
    return obj;
  }

  getId(): string {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  getEmail(): string {
    return this.email;
  }

  getQuestions(): Question[] {
    return this.questions;
  }

  getAnswers(): Answer[] {
    return this.answers;
  }

  getComments(): Comment[] {
    return this.comments;
  }
}
