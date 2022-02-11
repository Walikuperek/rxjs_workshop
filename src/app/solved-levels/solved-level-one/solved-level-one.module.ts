import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SolvedLevelOneRoutingModule} from './solved-level-one-routing.module';
import {SolvedLevelOneComponent} from './solved-level-one.component';

import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
    declarations: [
        SolvedLevelOneComponent
    ],
    imports: [
        CommonModule,
        SolvedLevelOneRoutingModule,
        HighlightModule
    ],
})
export class SolvedLevelOneModule {
}
