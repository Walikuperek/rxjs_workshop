import {Injectable} from '@angular/core';
import {IGame} from '../../fake-backend/game-list';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {AddedGamesHttpSimulator} from '../../fake-backend/added-games.backend';

export enum CrudAction {
    Add,
    Delete,
    Read
}

@Injectable()
export class AddedGamesService {
    private _crudActions$ = new BehaviorSubject<CrudAction>(CrudAction.Read);

    public addedGames$ = this._crudActions$.pipe(
        switchMap(() => this._getAddedGames())
    );

    constructor(private _http: AddedGamesHttpSimulator) {
    }

    public addGame(game: IGame): void {
        this._http.exists(game).subscribe(exists => {
            if (!exists) {
                this._crudActions$.next(CrudAction.Add);
                this._add(game).subscribe();
            } else {
                return alert('Gra została już dodana');
            }
        });
    }

    public removeGame(game: IGame): void {
        this._remove(game).subscribe();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    private _getAddedGames(): Observable<IGame[]> {
        return this._http.get().pipe(map(res => res.games));
    }

    private _add(game: IGame): Observable<IGame> {
        return this._http.post(game)
            .pipe(tap(() => this._crudActions$.next(CrudAction.Add)));
    }

    private _remove(gameToBeRemoved: IGame): Observable<{deleted: boolean}> {
        return this._http.delete(gameToBeRemoved)
            .pipe(tap(() => this._crudActions$.next(CrudAction.Delete)));
    }
}
