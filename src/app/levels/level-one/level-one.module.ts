import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LevelOneRoutingModule} from './level-one-routing.module';
import {LevelOneComponent} from './level-one.component';


@NgModule({
    declarations: [
        LevelOneComponent
    ],
    imports: [
        CommonModule,
        LevelOneRoutingModule,
    ]
})
export class LevelOneModule {
}
