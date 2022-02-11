import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LevelHeaderComponent} from './level-header.component';


@NgModule({
    declarations: [
        LevelHeaderComponent
    ],
    exports: [
        LevelHeaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LevelHeaderModule {
}
