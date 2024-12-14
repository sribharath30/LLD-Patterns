import { LogMessage } from "../log-message";

export interface LogAppender{
    append(message: LogMessage): void
}