import { Injectable } from '@angular/core';
import {
  FollowersHttpSimulator,
  IFollower,
} from '../../fake-backend/followers.backend';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class FollowersReactiveService {
  private _count$ = new BehaviorSubject<number>(0);
  private _refreshEvent$ = new BehaviorSubject<boolean>(false);

  public followers$: Observable<IFollower[]> = merge(this._refreshEvent$).pipe(
    switchMap(() => this._http.get()),
    map((res) => res.followers),
    tap((followers) => this._count$.next(followers.length))
  );

  public count$ = this._count$.asObservable();

  constructor(private _http: FollowersHttpSimulator) {}

  public count(): number {
    return this._count$.getValue();
  }

  public findOne(id: string): Observable<IFollower | undefined> {
    return this._http.getOne(id);
  }

  public create(follower: IFollower): Observable<IFollower> {
    return this._http
      .post(follower)
      .pipe(tap(() => this._refreshEvent$.next(true)));
  }

  public delete(follower: IFollower): Observable<{ deleted: boolean }> {
    return this._http
      .delete(follower)
      .pipe(tap(() => this._refreshEvent$.next(true)));
  }

  public deleteAll(): Observable<{ deleted: boolean }> {
    return this._http
      .deleteAll()
      .pipe(tap(() => this._refreshEvent$.next(true)));
  }
}
