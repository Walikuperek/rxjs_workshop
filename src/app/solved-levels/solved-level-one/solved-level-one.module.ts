import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SolvedLevelOneRoutingModule} from './solved-level-one-routing.module';
import {SolvedLevelOneComponent} from './solved-level-one.component';

import {HighlightModule} from 'ngx-highlightjs';
import {MatIconModule} from '@angular/material/icon';
import {CodeSnippetListModule} from '../../scam/code-snippet-list/code-snippet-list.module';
import {FooterAngularVersionModule} from '../../scam/footer-angular-version/footer-angular-version.module';
import {UnorderedListModule} from '../../scam/unordered-list/unordered-list.module';

@NgModule({
    declarations: [SolvedLevelOneComponent],
    imports: [
        CommonModule,
        SolvedLevelOneRoutingModule,
        HighlightModule,
        MatIconModule,
        CodeSnippetListModule,
        FooterAngularVersionModule,
        UnorderedListModule,
    ],
})
export class SolvedLevelOneModule {
}
