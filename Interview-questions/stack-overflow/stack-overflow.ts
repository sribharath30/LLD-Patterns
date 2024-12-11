import { Answer } from "./answer";
import { Question } from "./question";
import { User } from "./user";
import { Comment } from "./comment";

export class StackOverflow {
    private users: Map<string, User>;
    private questions: Map<string, Question>;
    private answers: Map<string, Answer>;
    private tags: string[];

    constructor(){
        this.users = new Map();
        this.questions = new Map();
        this.answers = new Map();
        this.tags = [];
    }

    createUser(username: string, email: string){
        const user = new User(username, email);
        this.users.set(user.getId(), user);
        return user;
    }
    askQuestion(
        user: User,
        title: string,
        content: string,
        tags: string[]
      ): Question {
        const question = user.askQuestion(title, content, tags);
        this.questions.set(question.getId(), question);
        return question;
      }
    
      answerQuestion(user: User, question: Question, content: string): Answer {
        const answer = user.answerQuestion(question, content);
        this.answers.set(answer.getId(), answer);
        return answer;
      }
    
      addComment(
        user: User,
        commentable: Comment,
        content: string
      ): Comment {
        return user.addComment(commentable, content);
      }
    
      voteQuestion(user: User, question: Question, value: number): void {
        question.vote();
      }
    
      voteAnswer(user: User, answer: Answer, value: number): void {
        answer.vote();
      }
    
      acceptAnswer(answer: Answer): void {
        answer.markAsAccepted();
      }
    
      searchQuestions(query: string): Question[] {
        return Array.from(this.questions.values()).filter(
          (q) =>
            q.getTitle().toLowerCase().includes(query.toLowerCase()) ||
            q.getContent().toLowerCase().includes(query.toLowerCase())
        );
      }
    
      getQuestionsByUser(user: User): Question[] {
        return user.getQuestions();
      }
    
      // Getters
      getUser(id: string): User | undefined {
        return this.users.get(id);
      }
    
      getQuestion(id: string): Question | undefined {
        return this.questions.get(id);
      }
    
      getAnswer(id: string): Answer | undefined {
        return this.answers.get(id);
      }
}