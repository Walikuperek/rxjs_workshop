import {Injectable} from '@angular/core';
import {IGame} from '../../fake-backend/game-list';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {AddedGamesHttpSimulator} from '../../fake-backend/added-games.backend';

export enum CrudAction {
    Add,
    Delete,
    Read,
}

@Injectable()
export class AddedGamesService {
    // TODO: 1. Create _crudActions$ BehaviorSubject

    // TODO: 2. Pipe to _crudActions$ BehaviorSubject to create addedGames$ + switchMap for _getAddedGames()
    public addedGames$ = this._getAddedGames();

    constructor(private _http: AddedGamesHttpSimulator) {
    }

    public addGame(game: IGame): Observable<any> {
        // TODO: 3. checkIfExist, add then return Observable<IGame>
        return of(game);
    }

    public removeGame(game: IGame): Observable<{ deleted: boolean }> {
        return this._remove(game);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    private _getAddedGames(): Observable<IGame[]> {
        return this._http.get().pipe(map((res) => res.games));
    }

    // TODO: 4. Tap next crudActions$ for _add & _remove
    private _add(game: IGame): Observable<IGame> {
        return this._http
            .post(game);
    }

    private _remove(gameToBeRemoved: IGame): Observable<{ deleted: boolean }> {
        return this._http
            .delete(gameToBeRemoved);
    }
}
