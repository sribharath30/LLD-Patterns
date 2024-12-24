import User from "./user";

export enum TaskStatus {
    New = "new",
    Pending = "pending",
    InProgress = "in-progress",
    Completed = "completed"
}

export class Task {
    private _id: string;
    private _name: string;
    private _description: string;
    private _priority: number;
    private _dueDate: Date;
    private _assignee: User;
    private _status: TaskStatus;

    constructor(
        id: string,
        name: string,
        description: string,
        priority: number,
        dueDate: Date,
        assignee: User,
        status: TaskStatus = TaskStatus.New
    ) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._priority = priority;
        this._dueDate = dueDate;
        this._assignee = assignee;
        this._status = status;
    }

    getId(): string {
        return this._id;
    }

    getName(): string {
        return this._name;
    }

    getDescription(): string {
        return this._description;
    }

    getPriority(): number {
        return this._priority;
    }

    getDueDate(): Date {
        return this._dueDate;
    }

    getAssignee(): User {
        return this._assignee;
    }

    getStatus(): TaskStatus {
        return this._status;
    }

    setName(name: string) {
        this._name = name;
    }
    
    setDescription(description: string) {
        this._description = description;
    }
    
    setDueDate(dueDate: Date) {
        this._dueDate = dueDate;
    }
    
    setPriority(priority: number) {
        this._priority = priority;
    }
    
    setStatus(status: TaskStatus) {
        this._status = status;
    }
}