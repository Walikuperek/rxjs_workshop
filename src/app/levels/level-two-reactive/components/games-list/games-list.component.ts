import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IGame} from '../../../../fake-backend/game-list';

@Component({
    selector: 'level-games-list',
    templateUrl: './games-list.component.html'
})
export class GamesListComponent {

    @Input() public games: IGame[] = [];
    @Output() public addGame: EventEmitter<IGame> = new EventEmitter<IGame>();

}
