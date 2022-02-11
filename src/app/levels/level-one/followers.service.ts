import {Injectable} from '@angular/core';
import {FollowersHttpSimulator, IFollower} from '../../fake-backend/followers.backend';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class FollowersService {

    constructor(private _http: FollowersHttpSimulator) {
    }

    public find(): Observable<IFollower[]> {
        return this._http.get().pipe(map(res => res.followers));
    }

    public findOne(id: string): Observable<IFollower | undefined> {
        return this._http.getOne(id);
    }

    public create(follower: IFollower): Observable<IFollower> {
        return this._http.post(follower);
    }

    public delete(follower: IFollower): Observable<{deleted: boolean}> {
        return this._http.delete(follower);
    }

    public deleteAll(): Observable<{deleted: boolean}> {
        return this._http.deleteAll();
    }

}
