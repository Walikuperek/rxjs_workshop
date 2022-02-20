import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolvedLevelTwoRoutingModule } from './solved-level-two-routing.module';
import { SolvedLevelTwoComponent } from './solved-level-two.component';
import {CodeSnippetListModule} from "../../scam/code-snippet-list/code-snippet-list.module";
import {UnorderedListModule} from "../../scam/unordered-list/unordered-list.module";
import {FooterAngularVersionModule} from "../../scam/footer-angular-version/footer-angular-version.module";
import {AlertModule} from "../../scam/alert/alert.module";


@NgModule({
  declarations: [
    SolvedLevelTwoComponent
  ],
    imports: [
        CommonModule,
        SolvedLevelTwoRoutingModule,
        CodeSnippetListModule,
        UnorderedListModule,
        FooterAngularVersionModule,
        AlertModule
    ]
})
export class SolvedLevelTwoModule { }
