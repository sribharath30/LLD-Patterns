import { LogAppender } from './log-appender/log-appender';
import { LogLevel } from './log-level';

export class LoggerConfig {
  private logLevel: LogLevel;
  private logAppender: LogAppender;

  constructor(loglevel: LogLevel, logAppender: LogAppender) {
    this.logAppender = logAppender;
    this.logLevel = loglevel;
  }

  public setLoglevel(loglevel: LogLevel) {
    this.logLevel = loglevel;
  }
  public setlogAppender(logAppender: LogAppender) {
    this.logAppender = logAppender;
  }
  public getLogLevel(): LogLevel {
    return this.logLevel;
  }

  public getLogAppender(): LogAppender {
    return this.logAppender;
  }
}
