import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IEvent} from './models/IEvent.interface';
import {shareReplay} from 'rxjs/operators';

@Injectable()
export class EventStoreService {
    private _store$ = new BehaviorSubject<IEvent[]>([]);

    // -----------------------------------------------------------------------------------------------------
    // @ Public API
    public events$: Observable<IEvent[]> = this._store$.pipe(shareReplay({refCount: true, bufferSize: 1}));

    public addEvent(event: IEvent): void {
        this._store$.next([...this._store$.getValue(), event].sort(sortByDateDesc));

        function sortByDateDesc(a: IEvent, b: IEvent): number {
            return b.createdAt.getTime() - a.createdAt.getTime();
        }
    }

    public clearEvents(): void {
        this._store$.next([]);
    }

    public eventsExists(): boolean {
        return this._store$.getValue().length > 0;
    }
}
