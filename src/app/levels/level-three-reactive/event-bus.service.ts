import {Injectable, OnDestroy} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {filter, map, shareReplay, takeUntil} from 'rxjs/operators';
import {Events} from './events.enum';
import {IEvent} from './models/IEvent.interface';
import {EventStoreService} from './event-store.service';

@Injectable()
export class EventBusService implements OnDestroy {
    private _destroyed$ = new Subject<void>();
    // TODO: 1. _event$: Subject<IEvent>

    constructor(private _eventStore: EventStoreService) {
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public API
    public on<T>(type: Events, callback: (data: T) => void): any {
        // TODO: 2. return Subscription
    }

    public emit<T>(type: Events, data: T): void {
        // TODO: 3. _event$ next + _eventStore add
    }
}
