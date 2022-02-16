import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvent } from './models/IEvent.interface';
import { Events } from './events.enum';

@Injectable()
export class EventStoreService {
  private _store$ = new BehaviorSubject<IEvent[]>([]);

  // -----------------------------------------------------------------------------------------------------
  // @ Public API
  public events$ = this._store$.asObservable();

  public addEvent(event: IEvent): void {
    this._store$.next(reversedArrToShowNewestOnTop([...this._store$.getValue(), event]));

    function reversedArrToShowNewestOnTop(arr: IEvent[]): IEvent[] {
      return arr.reverse();
    }
  }

  public clearEvents(): void {
    this._store$.next([]);
  }

  public eventsExists(): boolean {
    return this._store$.getValue().length > 0;
  }

  public removeLastEventOfType(eventType: Events): void {
    const events = this._store$.getValue();
    const index = events.findIndex((event) => event.type === eventType);
    if (index > -1) {
      events.splice(index, 1);
      this._store$.next(events);
    }
  }
}
