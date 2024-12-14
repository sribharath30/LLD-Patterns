import { LogLevel } from "./log-level";

export class LogMessage {
    private logLevel: LogLevel;
    private description: string;
    private timeStamp: string
    constructor(message: string, logLevel: LogLevel){
        this.logLevel = logLevel;
        this.description = message;
        this.timeStamp = 'now-date';
    }

    public getLogLevel(): LogLevel {
        return this.logLevel;
    }

    public getDescription(): string {
        return this.description;
    }

    public getTimeStamp(): string {
        return this.timeStamp;
    }

    public toString(): string {
        return "[" + this.logLevel + "] " + this.timeStamp + " - " + this.description;
    }
}