import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LevelThreeReactiveRoutingModule} from './level-three-reactive-routing.module';
import {LevelThreeReactiveComponent} from './level-three-reactive.component';
import {EventBusService} from './event-bus.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CoreModule} from '../../core/core.module';
import {EventfireNavComponent} from './components/eventfire-nav/eventfire-nav.component';
import {EventStoreService} from './event-store.service';
import {HeaderCollapseListComponent} from './components/header-collapse-list/header-collapse-list.component';
import {HeaderEventButtonsComponent} from './components/header-event-buttons/header-event-buttons.component';
import {ContentAuthorsCounterModule} from './modules/content-authors-counter/content-authors-counter.module';


@NgModule({
    declarations: [
        LevelThreeReactiveComponent,
        EventfireNavComponent,
        HeaderCollapseListComponent,
        HeaderEventButtonsComponent
    ],
    imports: [
        CommonModule,
        LevelThreeReactiveRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        CoreModule,
        ContentAuthorsCounterModule
    ],
    providers: [
        EventBusService,
        EventStoreService
    ]
})
export class LevelThreeReactiveModule {
}
