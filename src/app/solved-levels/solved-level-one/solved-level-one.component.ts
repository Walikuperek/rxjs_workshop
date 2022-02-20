import {Component} from '@angular/core';
import {ICodeFile} from '../../scam/code-snippet-list/ICodeFiles.interface';
import {getServiceCode} from './service-code';
import {getComponentTSCode} from './component-ts-code';
import {getHtmlCode} from './component-html-code';
import {AlertType} from '../../scam/alert/alert/alert.component';

@Component({
    selector: 'app-solved-level-one',
    templateUrl: './solved-level-one.component.html',
})
export class SolvedLevelOneComponent {
    public AlertType = AlertType;
    public codeFiles: ICodeFile[] = [];

    private _serviceCode = getServiceCode();
    private _componentTS = getComponentTSCode();
    private _componentHTML = getHtmlCode();

    constructor() {
        this.codeFiles.push(
            {
                path: '/levels/level-one-reactive/',
                name: 'followers-reactive.service.ts',
                code: this._serviceCode,
            },
            {
                path: '/levels/level-one-reactive/',
                name: 'level-one-reactive.component.ts',
                code: this._componentTS,
            },
            {
                path: '/levels/level-one-reactive/',
                name: 'level-one-reactive.component.html',
                code: this._componentHTML,
            }
        );
    }
}
