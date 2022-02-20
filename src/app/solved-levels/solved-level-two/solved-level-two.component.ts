import {Component} from '@angular/core';
import {ICodeFile} from '../../scam/code-snippet-list/ICodeFiles.interface';
import {getAddedGamesServiceCode} from './added-games-service-code';

@Component({
    selector: 'app-solved-level-two',
    templateUrl: './solved-level-two.component.html'
})
export class SolvedLevelTwoComponent {

    public codeFiles: ICodeFile[] = [];

    private _addedGamesServiceCode = getAddedGamesServiceCode();

    constructor() {
        this.codeFiles.push(
            {
                path: '/levels/level-two-reactive/',
                name: 'added-games.service.ts',
                code: this._addedGamesServiceCode,
            },
        );
    }

}
