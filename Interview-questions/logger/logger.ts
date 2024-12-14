import { ConsoleAppender } from './log-appender/console-appender';
import { LogLevel } from './log-level';
import { LogMessage } from './log-message';
import { LoggerConfig } from './logger-config';

export class Logger {
  private loggerConfig: LoggerConfig;
  private static instance: Logger;

  constructor(loggerConfig?: LoggerConfig) {
    this.loggerConfig =
      loggerConfig ?? new LoggerConfig(LogLevel.Info, new ConsoleAppender());
  }
  public static getInstance(): Logger {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }
  public setConfig(config: LoggerConfig) {
    this.loggerConfig = config;
  }
  public log(logLevel: LogLevel, message: string) {
    const logMessage = new LogMessage(message, logLevel);
    this.loggerConfig.getLogAppender().append(logMessage);
  }

  public debug(message: string): void {
    this.log(LogLevel.Debug, message);
  }

  public info(message: string): void {
    this.log(LogLevel.Info, message);
  }

  public warning(message: string): void {
    this.log(LogLevel.Warning, message);
  }

  public error(message: string): void {
    this.log(LogLevel.Error, message);
  }

  public fatal(message: string): void {
    this.log(LogLevel.Fatal, message);
  }
}
