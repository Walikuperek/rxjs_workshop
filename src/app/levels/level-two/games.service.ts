import { Injectable } from '@angular/core';
import { GAMES_LIST, IGame } from '../../fake-backend/game-list';
import { completedObservable } from '../../fake-backend/completeObservable';
import { Observable } from 'rxjs';

@Injectable()
export class GamesService {
  public games: IGame[] = GAMES_LIST.rows;

  getGames(): Observable<IGame[]> {
    /* Simulates this.http.get('url/to/games') */
    return completedObservable(this.games);
  }

  filter(criteria: string): Observable<IGame[]> {
    /* Simulates this.http.get('url/to/games/search?criteria=$criteria') */
    this.games = [...GAMES_LIST.rows];
    return completedObservable(
      this.games.filter((game) =>
        game.title.toLowerCase().includes(criteria.toLowerCase())
      )
    );
  }
}
