import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelOneReactiveRoutingModule } from './level-one-reactive-routing.module';
import { LevelOneReactiveComponent } from './level-one-reactive.component';
import { LevelHeaderModule } from '../../scam/level-header/level-header.module';
import { LevelProgressModule } from '../../scam/level-progress/level-progress.module';
import { FollowersReactiveService } from './followers-reactive.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertModule } from '../../scam/alert/alert.module';
import {LevelFollowersListModule} from "../../scam/level-followers-list/level-followers-list.module";
import {UnorderedListModule} from "../../scam/unordered-list/unordered-list.module";

@NgModule({
  declarations: [LevelOneReactiveComponent],
    imports: [
        CommonModule,
        LevelOneReactiveRoutingModule,
        LevelHeaderModule,
        LevelProgressModule,
        MatIconModule,
        MatTooltipModule,
        AlertModule,
        LevelFollowersListModule,
        UnorderedListModule,
    ],
  providers: [FollowersReactiveService],
})
export class LevelOneReactiveModule {}
