import { Injectable } from '@angular/core';
import { AddedGamesHttpSimulator } from '../../fake-backend/added-games.backend';
import { IGame } from '../../fake-backend/game-list';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AddedGamesService {
  public addedGames: IGame[] = [];

  constructor(private _http: AddedGamesHttpSimulator) {}

  public getAddedGames(): Observable<IGame[]> {
    return this._getAddedGames();
  }

  public addGame(game: IGame): Observable<IGame> {
    return this._http.exists(game).pipe(
      switchMap((exists) => {
        if (exists) {
          return throwError('Gra została już dodana!');
        } else {
          return this._add(game);
        }
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
    return this._http.post(game);
  }

  private _remove(gameToBeRemoved: IGame): Observable<{ deleted: boolean }> {
    return this._http.delete(gameToBeRemoved);
  }
}
