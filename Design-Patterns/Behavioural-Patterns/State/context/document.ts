import { IState } from "../abstract-state/state";
import { DraftState } from "../concrete-states/draft-state";
import { ModerationState } from "../concrete-states/moderation-state";
import { PublishedState } from "../concrete-states/publish-state";

export class Document{
    draftState: IState;
    moderationState: IState;
    publishedState: IState;
    private currentState:IState

    constructor(){
        this.draftState = new DraftState(this);
    this.moderationState = new ModerationState(this);
    this.publishedState = new PublishedState(this);

    this.currentState = this.draftState; // Initial state    
    }
    setState(state: IState){
        this.currentState = state;
    };

    publish(){
        this.currentState.publish();
    }
    edit(){
        this.currentState.edit();
    }
}