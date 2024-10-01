import type { IPublisher, ISubscriber } from "../interfaces";
import type { EventArgs } from "../types";

export class CounterPublisher implements IPublisher {
    private subscribers: Set<ISubscriber> = new Set();
    private counter: number = 0;

    countUp(): void {
        this.counter++;
        this.notify();
    }

   subscribe(subscriber: ISubscriber): void {
      this.subscribers.add(subscriber);
   }

   unsubscribe(subscriber: ISubscriber): void {
       this.subscribers.delete(subscriber);
   }

   notify(): void {
        const eventArgs: EventArgs<number> = {
            name: "CounterUpdate",
            data: this.counter,
        }
       this.subscribers.forEach((s) => {s.update(eventArgs)})
   }


}
