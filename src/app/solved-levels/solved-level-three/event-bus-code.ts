export const getEventBusCode = (): string => {
  return `import {Injectable, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {filter, map, shareReplay, takeUntil} from 'rxjs/operators';
import {Events} from './events.enum';
import {IEvent} from './models/IEvent.interface';
import {EventStoreService} from './event-store.service';

@Injectable()
export class EventBusService implements OnDestroy {
    private _destroyed$ = new Subject<void>(); // Flag for unsubscribing from observables after service is dead
    private _event$ = new Subject<IEvent>(); // Will contain: Current event

    constructor(private _eventStore: EventStoreService) {
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public API
    public on<T>(type: Events, callback: (data: T) => void): Subscription {
        return this._event$
            .pipe(
                filter((event) => event.type === type), // Get event only if it's the right type
                map((event) => (event.data) as T), // Now this stream will emit only what's inside the Event.data
                shareReplay({refCount: true, bufferSize: 1}), // Ensure that every subscriber gets the same stream
                takeUntil(this._destroyed$) // Cancel the stream if the service is destroyed
            )
            .subscribe(callback);
    }

    public emit<T>(type: Events, data: T): void {
        const createdAt = new Date();
        this._event$.next({type, data, createdAt}); // Pass next event
        this._eventStore.addEvent({type, data, createdAt}); // Pass event to store
    }
}`;
};
