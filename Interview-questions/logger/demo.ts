import { FileAppender } from "./log-appender/file-appender";
import { LogLevel } from "./log-level";
import { Logger } from "./Logger";
import { LoggerConfig } from "./logger-config";

export class LoggingFrameworkDemo {
    public static run(): void {
        const logger = Logger.getInstance();

        // Logging with default configuration
        logger.info("This is an information message");
        logger.warning("This is a warning message");
        logger.error("This is an error message");

        // Changing log level and appender
        const config = new LoggerConfig(LogLevel.Debug, new FileAppender());
        logger.setConfig(config);

        logger.debug("This is a debug message");
        logger.info("This is an information message");
    }
}
LoggingFrameworkDemo.run()