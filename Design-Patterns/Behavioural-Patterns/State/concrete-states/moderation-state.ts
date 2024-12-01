import { IState } from "../abstract-state/state";
import { Document } from "../context/document";

export class ModerationState implements IState {
    constructor(private document: Document) {}
  
    publish(): void {
      console.log("Document is published.");
      this.document.setState(this.document.publishedState);
    }
  
    edit(): void {
      console.log("Cannot edit in moderation. Send back to draft.");
      this.document.setState(this.document.draftState);
    }
  }