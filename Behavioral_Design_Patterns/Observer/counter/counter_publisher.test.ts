import { CounterPublisher } from "./counter_publisher";
import { CounterSubscriber } from "./counter_subscriber";
import type { ILogger } from "../interfaces";

describe("CounterPublisher", () => {
    let publisher: CounterPublisher;
    let subscriber1: CounterSubscriber;
    let subscriber2: CounterSubscriber;
    let mockLogger: ILogger;
    
    beforeEach(() => {
        publisher = new CounterPublisher();

        mockLogger = {
            log: jest.fn()
        }

        subscriber1 = new CounterSubscriber(mockLogger);
        subscriber2 = new CounterSubscriber(mockLogger);
    });


    test("should allow subscribe to the publisher", () =>{
        publisher.subscribe(subscriber1);

        publisher.notify();

        expect(mockLogger.log).toHaveBeenCalledWith("CounterUpdate: 0");
    });

    test("should allow subscriber to unsubsribe", () => {
        publisher.subscribe(subscriber1);
        publisher.unsubscribe(subscriber1);

        publisher.countUp()

        expect(mockLogger.log).not.toHaveBeenCalled();
    });

    test("should not throw when unsubscribe a not subscribed subscriber", () => {
        expect(() => {
            publisher.unsubscribe(subscriber1);
        }).not.toThrow();
    });

    test("should notify multiple subscribers", () => {
        publisher.subscribe(subscriber1);
        publisher.subscribe(subscriber2);

        publisher.countUp();

        expect(mockLogger.log).toHaveBeenCalledTimes(2);
        expect(mockLogger.log).toHaveBeenCalledWith("CounterUpdate: 1");
        expect(mockLogger.log).toHaveBeenCalledWith("CounterUpdate: 1");
    });
});
