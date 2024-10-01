import type { EventArgs } from "./types";

export interface ISubscriber{
   update<T>(context: EventArgs): T | void; 
}

export interface IPublisher {
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    notify(): void;
}

export interface ILogger {
   log(text: string): void;
}
