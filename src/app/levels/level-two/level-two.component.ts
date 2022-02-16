import { Component, OnInit } from '@angular/core';
import { IGame } from '../../fake-backend/game-list';
import { AlertType } from '../../scam/alert/alert/alert.component';
import { GamesService } from './games.service';
import { AddedGamesService } from './added-games.service';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
})
export class LevelTwoComponent implements OnInit {
  public AlertType = AlertType;
  public games: { count: number; rows: IGame[] } = { count: 0, rows: [] };
  public addedGames: IGame[] = [];

  constructor(
    private _addedGamesService: AddedGamesService,
    private _gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this._gamesService
      .getGames()
      .subscribe((games) => this._updateGames(games));

    this._addedGamesService
      .getAddedGames()
      .subscribe((addedGames) => (this.addedGames = addedGames));
  }

  public onCriteriaChange($event: string): void {
    this._gamesService
      .filter($event)
      .subscribe((games) => this._updateGames(games));
  }

  public onRemoveGame(gameToBeRemoved: IGame): void {
    this._addedGamesService.removeGame(gameToBeRemoved).subscribe((res) => {
      if (res.deleted) {
        this.addedGames = this.addedGames.filter(
          (game) => game !== gameToBeRemoved
        );
      }
    });
  }

  public onAddGame(game: IGame): void {
    this._addedGamesService.addGame(game).subscribe(
      (addedGame) => this.addedGames.push(addedGame),
      (error) => alert(error)
    );
  }

  private _updateGames(games: IGame[]): void {
    this.games.rows = games;
    this.games.count = games.length;
  }
}
