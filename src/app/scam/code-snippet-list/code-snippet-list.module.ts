import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeSnippetListComponent} from './code-snippet-list/code-snippet-list.component';
import {MatIconModule} from "@angular/material/icon";
import {HighlightModule} from "ngx-highlightjs";


@NgModule({
    declarations: [
        CodeSnippetListComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        HighlightModule
    ],
    exports: [
        CodeSnippetListComponent
    ]
})
export class CodeSnippetListModule {
}
