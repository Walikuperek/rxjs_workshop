import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolvedLevelThreeRoutingModule } from './solved-level-three-routing.module';
import { SolvedLevelThreeComponent } from './solved-level-three.component';
import {UnorderedListModule} from "../../scam/unordered-list/unordered-list.module";
import {CodeSnippetListModule} from "../../scam/code-snippet-list/code-snippet-list.module";
import {FooterAngularVersionModule} from "../../scam/footer-angular-version/footer-angular-version.module";
import {AlertModule} from "../../scam/alert/alert.module";


@NgModule({
  declarations: [
    SolvedLevelThreeComponent
  ],
    imports: [
        CommonModule,
        SolvedLevelThreeRoutingModule,
        UnorderedListModule,
        CodeSnippetListModule,
        FooterAngularVersionModule,
        AlertModule
    ]
})
export class SolvedLevelThreeModule { }
