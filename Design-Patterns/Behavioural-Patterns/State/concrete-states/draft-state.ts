import { IState } from "../abstract-state/state";
import { Document } from "../context/document";

export class DraftState implements IState {
    constructor(private document: Document) {}
  
    publish(): void {
      console.log("Document is sent for moderation.");
      this.document.setState(this.document.moderationState);
    }
  
    edit(): void {
      console.log("Editing the document in draft.");
    }
  }