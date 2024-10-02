import type { EventArgs } from "./types";

export interface ISubscriber{
   update(context: EventArgs): void; 
}

export interface IPublisher {
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    notify(): void;
}

export interface ILogger {
   log(text: string): void;
}
