import { Injectable, OnDestroy } from '@angular/core';
import { GAMES_LIST, IGame } from '../../fake-backend/game-list';
import { BehaviorSubject, merge, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
} from 'rxjs/operators';

interface IGamesState {
  games: IGame[];
  count: number;
  criteria: string;
}

const initialState: IGamesState = {
  games: GAMES_LIST.rows,
  count: GAMES_LIST.count,
  criteria: '',
};

@Injectable()
export class GamesService implements OnDestroy {
  private _destroyed$ = new Subject<void>();
  private _store$ = new BehaviorSubject<IGamesState>(initialState);
  private _gamesState$ = this._store$.asObservable();

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  public games$ = this._gamesState$.pipe(map((state) => state.games));

  public criteria$ = this._gamesState$.pipe(map((state) => state.criteria));

  constructor() {
    this.criteria$
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        takeUntil(this._destroyed$) // unsubscribe when service is destroyed
      )
      .subscribe((criteria) => this._pushFilteredGames(criteria));
  }

  public updateCriteria(criteria: string) {
    this._store$.next({
      ...this._store$.value,
      criteria,
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  private _pushFilteredGames(criteria: string = ''): void {
    const games = this._filterGames(criteria);
    this._store$.next({
      ...this._store$.value,
      count: games.length,
      games,
    });
  }

  private _filterGames(criteria: string): IGame[] {
    return [...GAMES_LIST.rows].filter((game) => {
      return game.title.toLowerCase().includes(criteria.toLowerCase());
    });
  }
}
