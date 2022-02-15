import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LevelTwoRoutingModule} from './level-two-routing.module';
import {LevelTwoComponent} from './level-two.component';
import {CoreModule} from '../../core/core.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';
import {HeaderCountersNSearchComponent} from './components/header-counters-n-search/header-counters-n-search.component';
import {GamesListComponent} from './components/games-list/games-list.component';
import {AlertModule} from '../../scam/alert/alert.module';
import { AddedGamesListComponent } from './components/added-games-list/added-games-list.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        LevelTwoComponent,
        HeaderCountersNSearchComponent,
        GamesListComponent,
        AddedGamesListComponent
    ],
    imports: [
        CommonModule,
        LevelTwoRoutingModule,
        CoreModule,
        MatIconModule,
        MatTooltipModule,
        FormsModule,
        AlertModule,
        MatButtonModule
    ]
})
export class LevelTwoModule {
}
