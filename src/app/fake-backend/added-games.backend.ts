import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { completedObservable } from './completeObservable';
import { IGame } from './game-list';

@Injectable()
/**
 * Fake Backend for the CRUD games section
 *
 * Made as HttpClient replacement so we could test it easily without a server,
 * @returns Observables like http requests in Angular
 */
export class AddedGamesHttpSimulator {
  private _addedGames$: BehaviorSubject<IGame[]> = new BehaviorSubject<IGame[]>(
    []
  );

  // -----------------------------------------------------------------------------------------------------
  // @ Public API
  public get(): Observable<{ count: number; games: IGame[] }> {
    const games = this._addedGames$.getValue();
    return completedObservable({ count: games.length, games });
  }

  public post(game: IGame): Observable<IGame> {
    this._addedGames$.next([...this._addedGames$.getValue(), game]);
    return completedObservable(game);
  }

  public delete(gameToBeRemoved: IGame): Observable<{ deleted: boolean }> {
    this._addedGames$.next(
      this._addedGames$.getValue().filter((game) => game !== gameToBeRemoved)
    );
    return completedObservable({ deleted: true });
  }

  public exists(game: IGame): Observable<boolean> {
    return completedObservable(this._addedGames$.getValue().includes(game));
  }
}
