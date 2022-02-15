import {Component} from '@angular/core';
import {GAMES_LIST, IGame} from '../../fake-backend/game-list';
import {AlertType} from '../../scam/alert/alert/alert.component';

@Component({
    selector: 'app-level-two',
    templateUrl: './level-two.component.html'
})
export class LevelTwoComponent {
    public AlertType = AlertType;
    public games = GAMES_LIST;
    public addedGames: IGame[] = [];

    public onCriteriaChange($event: any): void {
        this.games = {...GAMES_LIST};
        this.games.rows = this.games.rows.filter(game => {
            return game.title.toLowerCase().includes($event.toLowerCase());
        });
        this.games.count = this.games.rows.length;
    }

    public onRemoveGame(gameToBeRemoved: IGame): void {
        this.addedGames = this.addedGames.filter(game => game !== gameToBeRemoved);
    }

    public onAddGame(game: IGame): void {
        if (this.addedGames.indexOf(game) === -1) {
            this.addedGames.push(game);
        } else {
            alert('Gra została już dodana');
        }
    }
}
