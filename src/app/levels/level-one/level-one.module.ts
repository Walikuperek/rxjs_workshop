import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelOneRoutingModule } from './level-one-routing.module';
import { LevelOneComponent } from './level-one.component';
import { FollowersService } from './followers.service';
import { LevelHeaderModule } from '../../scam/level-header/level-header.module';
import { LevelProgressModule } from '../../scam/level-progress/level-progress.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertModule } from '../../scam/alert/alert.module';

@NgModule({
  declarations: [LevelOneComponent],
  imports: [
    CommonModule,
    LevelOneRoutingModule,
    LevelHeaderModule,
    LevelProgressModule,
    MatIconModule,
    MatTooltipModule,
    AlertModule,
  ],
  providers: [FollowersService],
})
export class LevelOneModule {}
