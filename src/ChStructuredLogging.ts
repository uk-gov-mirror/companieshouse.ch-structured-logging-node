import LoggerFactory from "./LoggerFactory";
import LoggerOptions from "./LoggerOptions";
import MiddlewareFactory from "./MiddlewareFactory";
import { RequestHandler } from "express";
import StructuredLogger from "./StructuredLogger";

export class ChStructuredLogging {

    logger: StructuredLogger;

    middleware: RequestHandler;

    constructor(options: LoggerOptions) {

        this.logger = LoggerFactory.create(options);
        this.middleware = MiddlewareFactory.create(this.logger);
    }
}
