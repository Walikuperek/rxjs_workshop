import {Component} from '@angular/core';
import {ICodeFile} from '../../scam/code-snippet-list/ICodeFiles.interface';
import {getEventBusCode} from './event-bus-code';

@Component({
    selector: 'app-solved-level-three',
    templateUrl: './solved-level-three.component.html'
})
export class SolvedLevelThreeComponent {

    public codeFiles: ICodeFile[] = [];

    private _busCode = getEventBusCode();

    constructor() {
        this.codeFiles.push(
            {
                path: '/levels/level-three-reactive/',
                name: 'event-bus.service.ts',
                code: this._busCode,
            },
        );
    }

}
