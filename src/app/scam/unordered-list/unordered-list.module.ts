import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnorderedListComponent} from './unordered-list/unordered-list.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    declarations: [
        UnorderedListComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        UnorderedListComponent
    ]
})
export class UnorderedListModule {
}
