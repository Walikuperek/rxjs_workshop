import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LevelOneRoutingModule} from './level-one-routing.module';
import {LevelOneComponent} from './level-one.component';
import {FollowersHttpSimulator} from './followers.backend';


@NgModule({
    declarations: [
        LevelOneComponent
    ],
    imports: [
        CommonModule,
        LevelOneRoutingModule,
    ],
    providers: [FollowersHttpSimulator]
})
export class LevelOneModule {
}
