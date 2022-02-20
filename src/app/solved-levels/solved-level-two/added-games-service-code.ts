export const getAddedGamesServiceCode = () => {
    return `import {Injectable} from '@angular/core';
import {IGame} from '../../fake-backend/game-list';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {AddedGamesHttpSimulator} from '../../fake-backend/added-games.backend';

export enum CrudAction {
    Add,
    Delete,
    Read,
}

@Injectable()
export class AddedGamesService {
    private _crudActions$ = new BehaviorSubject<CrudAction>(CrudAction.Read);

    public addedGames$ = this._crudActions$.pipe(
        switchMap(() => this._getAddedGames())
    );

    constructor(private _http: AddedGamesHttpSimulator) {
    }

    public addGame(game: IGame): Observable<IGame> {
        return this._http.exists(game).pipe(
            switchMap((exists) => {
                if (exists) {
                    return throwError('Gra została już dodana!');
                }
                this._crudActions$.next(CrudAction.Add);
                return this._add(game);
            })
        );
    }

    public removeGame(game: IGame): Observable<{ deleted: boolean }> {
        return this._remove(game);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    private _getAddedGames(): Observable<IGame[]> {
        return this._http.get().pipe(map((res) => res.games));
    }

    private _add(game: IGame): Observable<IGame> {
        return this._http
            .post(game)
            .pipe(tap(() => this._crudActions$.next(CrudAction.Add)));
    }

    private _remove(gameToBeRemoved: IGame): Observable<{ deleted: boolean }> {
        return this._http
            .delete(gameToBeRemoved)
            .pipe(tap(() => this._crudActions$.next(CrudAction.Delete)));
    }
}
`;
};
