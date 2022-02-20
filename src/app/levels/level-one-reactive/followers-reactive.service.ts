import {Injectable} from '@angular/core';
import {
    FollowersHttpSimulator,
    IFollower,
} from '../../fake-backend/followers.backend';
import {BehaviorSubject, merge, Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class FollowersReactiveService {
    // TODO: 1. Create _count$ BehaviorSubject<number>
    private _count$ = of(0);
    public count$ = this._count$; // Remember about .asObservable()

    // TODO: 2. Create _refreshEvent$ BehaviorSubject<boolean>
    private _refreshEvent$ = of(false);

    // TODO: 3. Create followers$: Observable<IFollower[]>
    //                      - Use merge for _refreshEvent$ or just subscribe to it
    //                      - Use switchMap for returning now this._http.get()
    //                      - Use map to return only followers
    //                      - Use tap to update _count$
    public followers$: Observable<IFollower[]> = this._http.get().pipe(map(res => res.followers));


    constructor(private _http: FollowersHttpSimulator) {
    }

    // TODO: 4. Create method: count(): number, with use of getValue()
    public count(): any {
    }

    public findOne(id: string): Observable<IFollower | undefined> {
        return this._http.getOne(id);
    }

    // TODO: 5. Tap to next _refreshEvent$ in methods: create & delete & deleteAll
    public create(follower: IFollower): Observable<IFollower> {
        return this._http
            .post(follower);
    }

    public delete(follower: IFollower): Observable<{ deleted: boolean }> {
        return this._http
            .delete(follower);
    }

    public deleteAll(): Observable<{ deleted: boolean }> {
        return this._http
            .deleteAll();
    }
}
