import { IState } from "../abstract-state/state";
import { Document } from "../context/document";

export class PublishedState implements IState {
    // @ts-ignore
    constructor(private _document: Document) {}
  
    publish(): void {
      console.log("Document is already published.");
    }
  
    edit(): void {
      console.log("Cannot edit a published document.");
    }
  }