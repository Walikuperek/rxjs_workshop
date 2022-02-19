import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelThreeReactiveRoutingModule } from './level-three-reactive-routing.module';
import { LevelThreeReactiveComponent } from './level-three-reactive.component';
import { EventBusService } from './event-bus.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventfireNavComponent } from './components/eventfire-nav/eventfire-nav.component';
import { EventStoreService } from './event-store.service';
import { HeaderCollapseListComponent } from './components/header-collapse-list/header-collapse-list.component';
import { HeaderEventButtonsComponent } from './components/header-event-buttons/header-event-buttons.component';
import { ContentAuthorsCounterModule } from './modules/content-authors-counter/content-authors-counter.module';
import { AlertModule } from '../../scam/alert/alert.module';
import { EventSplittedListComponent } from './components/event-splitted-list/event-splitted-list.component';
import {UnorderedListModule} from "../../scam/unordered-list/unordered-list.module";

@NgModule({
  declarations: [
    LevelThreeReactiveComponent,
    EventfireNavComponent,
    HeaderCollapseListComponent,
    HeaderEventButtonsComponent,
    EventSplittedListComponent,
  ],
    imports: [
        CommonModule,
        LevelThreeReactiveRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        ContentAuthorsCounterModule,
        AlertModule,
        UnorderedListModule,
    ],
  providers: [EventBusService, EventStoreService],
})
export class LevelThreeReactiveModule {}
