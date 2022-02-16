import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Events } from './events.enum';
import { IEvent } from './models/IEvent.interface';
import { EventStoreService } from './event-store.service';

@Injectable()
export class EventBusService implements OnDestroy {
  private _destroyed$ = new Subject<void>();
  private _events$ = new Subject<IEvent>();

  constructor(private _eventStore: EventStoreService) {}

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public API
  public on<T>(type: Events, callback: (data: T) => void): Subscription {
    return this._events$
      .pipe(
        filter((event) => event.type === type),
        map((event) => event.data),
        shareReplay({ refCount: true, bufferSize: 1 })
      )
      .subscribe(callback);
  }

  public emit<T>(type: Events, data: T): void {
    const createdAt = new Date();
    this._events$.next({ type, data, createdAt });
    this._eventStore.addEvent({ type, data, createdAt });
  }
}
