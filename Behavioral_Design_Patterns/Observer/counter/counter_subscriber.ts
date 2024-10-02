import type { ILogger, ISubscriber } from "../interfaces";
import type { EventArgs } from "../types";

export class CounterSubscriber implements ISubscriber {
    private logger: ILogger;

    public constructor(logger: ILogger){
        this.logger = logger;
    }

    update(context: EventArgs): void {
        this.logger.log(`${context.name}: ${context.data}`);

    }

} 
