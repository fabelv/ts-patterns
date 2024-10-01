import type { ILogger, ISubscriber } from "../interfaces";
import type { EventArgs } from "../types";

export class CounterSubscriber implements ISubscriber {
    private logger: ILogger;

    public constructor(logger: ILogger){
        this.logger = logger;
    }

    update<T>(context: EventArgs): T | void {
        this.logger.log(`${context.name}: ${context.data}`);
    }

} 
