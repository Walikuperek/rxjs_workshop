import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelTwoRoutingModule } from './level-two-routing.module';
import { LevelTwoComponent } from './level-two.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { HeaderCountersNSearchComponent } from './components/header-counters-n-search/header-counters-n-search.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { AlertModule } from '../../scam/alert/alert.module';
import { AddedGamesListComponent } from './components/added-games-list/added-games-list.component';
import { MatButtonModule } from '@angular/material/button';
import { GamesService } from './games.service';
import { AddedGamesService } from './added-games.service';
import {UnorderedListModule} from "../../scam/unordered-list/unordered-list.module";

@NgModule({
  declarations: [
    LevelTwoComponent,
    HeaderCountersNSearchComponent,
    GamesListComponent,
    AddedGamesListComponent,
  ],
    imports: [
        CommonModule,
        LevelTwoRoutingModule,
        MatIconModule,
        MatTooltipModule,
        FormsModule,
        AlertModule,
        MatButtonModule,
        UnorderedListModule,
    ],
  providers: [GamesService, AddedGamesService],
})
export class LevelTwoModule {}
