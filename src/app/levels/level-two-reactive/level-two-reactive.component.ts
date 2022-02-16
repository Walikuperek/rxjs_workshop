import { Component } from '@angular/core';
import { IGame } from '../../fake-backend/game-list';
import { AlertType } from '../../scam/alert/alert/alert.component';
import { GamesService } from './games.service';
import { AddedGamesService } from './added-games.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ILevelTwoReactive {
  games: IGame[];
  addedGames: IGame[];
}

@Component({
  selector: 'app-level-two-reactive',
  templateUrl: './level-two-reactive.component.html',
})
export class LevelTwoReactiveComponent {
  public AlertType = AlertType;

  public vm$: Observable<ILevelTwoReactive>;

  constructor(
    public gamesService: GamesService,
    public addedGamesService: AddedGamesService
  ) {
    this.vm$ = combineLatest([
      this.gamesService.games$,
      this.addedGamesService.addedGames$,
    ]).pipe(
      map(([games, addedGames]) => {
        return {
          games,
          addedGames,
        };
      })
    );
  }

  public onCriteriaChange(criteria: string) {
    this.gamesService.updateCriteria(criteria);
  }

  public onAddGame(game: IGame): void {
    this.addedGamesService.addGame(game).subscribe(
      () => {},
      (err) => alert(err)
    );
  }

  public onRemoveGame(game: IGame): void {
    this.addedGamesService.removeGame(game).subscribe();
  }
}
