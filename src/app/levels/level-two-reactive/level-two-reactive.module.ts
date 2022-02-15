import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LevelTwoReactiveRoutingModule} from './level-two-reactive-routing.module';
import {LevelTwoReactiveComponent} from './level-two-reactive.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';
import {GamesService} from './games.service';
import {AddedGamesService} from './added-games.service';
import { HeaderCountersNSearchComponent } from './components/header-counters-n-search/header-counters-n-search.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import {AlertModule} from '../../scam/alert/alert.module';
import {AddedGamesListComponent} from './components/added-games-list/added-games-list.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        LevelTwoReactiveComponent,
        HeaderCountersNSearchComponent,
        GamesListComponent,
        AddedGamesListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatTooltipModule,
        LevelTwoReactiveRoutingModule,
        AlertModule,
        MatButtonModule,
    ],
    providers: [
        GamesService,
        AddedGamesService
    ]
})
export class LevelTwoReactiveModule {
}
