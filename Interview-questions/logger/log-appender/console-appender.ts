import { LogMessage } from '../log-message';
import { LogAppender } from './log-appender';

export class ConsoleAppender implements LogAppender {
  append(message: LogMessage): void {
    console.log(message);
  }
}
