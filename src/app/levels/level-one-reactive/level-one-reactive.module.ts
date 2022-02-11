import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LevelOneReactiveRoutingModule} from './level-one-reactive-routing.module';
import {LevelOneReactiveComponent} from './level-one-reactive.component';
import {LevelHeaderModule} from '../../scam/level-header/level-header.module';
import {LevelProgressModule} from '../../scam/level-progress/level-progress.module';
import {FollowersReactiveService} from './followers-reactive.service';


@NgModule({
    declarations: [
        LevelOneReactiveComponent
    ],
    imports: [
        CommonModule,
        LevelOneReactiveRoutingModule,
        LevelHeaderModule,
        LevelProgressModule
    ],
    providers: [FollowersReactiveService]
})
export class LevelOneReactiveModule {
}
