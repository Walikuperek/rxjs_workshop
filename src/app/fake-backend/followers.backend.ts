import {BehaviorSubject, Observable} from 'rxjs';
import {RandomStringService} from '../core/services/random-string.service';
import {Injectable} from '@angular/core';

export interface IFollower {
    id: string;
    name: string;
    job: string;
    avatar: string;
}

@Injectable()
/**
 * Fake Backend for the followers section
 *
 * Made as HttpClient replacement so we could test it easily without a server,
 * @returns Observables like http requests in Angular
 */
export class FollowersHttpSimulator {
    private _followers$: BehaviorSubject<IFollower[]> = new BehaviorSubject<IFollower[]>([]);

    constructor(private randomStr: RandomStringService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public API
    public get(): Observable<{count: number; followers: IFollower[]}> {
        const followers = this._followers$.getValue();
        return this._completedObservable({count: followers.length, followers});
    }

    public getOne(id: string): Observable<IFollower | undefined> {
        return this._completedObservable(
            this._followers$.getValue().find(follower => follower.id === id)
        );
    }

    public post(follower: IFollower): Observable<IFollower> {
        this._followers$.next([...this._followers$.getValue(), follower]);
        return this._completedObservable(follower);
    }

    public delete(follower: IFollower): Observable<{ deleted: boolean }> {
        const followers = this._getFollowersWithoutId(follower.id);
        if (followers.length === this._followers$.getValue().length) {
            return this._completedObservable({deleted: false});
        }

        this._followers$.next(followers);
        return this._completedObservable({deleted: true});
    }

    public deleteAll(): Observable<{ deleted: boolean }> {
        this._followers$.next([]);
        return this._completedObservable({deleted: true});
    }

    public randomFollower(): IFollower {
        return {
            id: this.randomStr.uuid(),
            name: this.randomStr.randomName(),
            job: this.randomStr.randomJob(),
            avatar: 'assets/icons/icon-152x152.png',
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    private _getFollowersWithoutId(id: string): IFollower[] {
        return this._followers$.getValue().filter(f => f.id !== id);
    }

    private _completedObservable<T>(value: T): Observable<T> {
        return new Observable<T>(observer => {
            observer.next(value);
            console.warn('Simulated http request completed', value);
            observer.complete();
        });
    }
}

