import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGame } from '../../../../fake-backend/game-list';

@Component({
  selector: 'level-added-games-list',
  templateUrl: './added-games-list.component.html',
})
export class AddedGamesListComponent {
  @Input() public addedGames: IGame[] = [];
  @Output() public removeGame = new EventEmitter<IGame>();
}
