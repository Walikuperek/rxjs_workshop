import {Component, OnInit} from '@angular/core';
import {GAMES_LIST} from '../../fake-backend/game-list';

@Component({
    selector: 'app-level-two-reactive',
    templateUrl: './level-two-reactive.component.html'
})
export class LevelTwoReactiveComponent implements OnInit {
    public criteria = '';
    public games = GAMES_LIST;
    public addedGames: any[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    public addGame(game: any): void {
        console.log(game);
        if (this.addedGames.indexOf(game) === -1) {
            this.addedGames.push(game);
        } else {
            alert('Gra została już dodana');
        }
    }

    public filterGames(event: any): void {
        this.games.rows = GAMES_LIST.rows;
        if (event.target.value === '') {
            console.log(event.target.value);
        } else {
            this.games.rows = this.games.rows.filter(game => game.title.toLowerCase().includes(this.criteria.toLowerCase()));
        }
        this.games.count = this.games.rows.length;
    }

}
