import { LogMessage } from '../log-message';
import { LogAppender } from './log-appender';

export class FileAppender implements LogAppender {
  append(message: LogMessage): void {
    console.log('logs appended to a file');
    console.log(message,'added to file');
  }
}
