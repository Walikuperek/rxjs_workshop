import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {SubNavComponent} from './components/sub-nav/sub-nav.component';
import {SvgIconsPreloaderComponent} from './components/svg-icons-preloader/svg-icons-preloader.component';
import {PageService} from './services/page.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {RandomStringService} from './services/random-string.service';
import {MatIconModule} from '@angular/material/icon';

const COMPONENTS = [
    SideNavComponent,
    SubNavComponent,
    SvgIconsPreloaderComponent
];

const SERVICES = [
    PageService,
    RandomStringService
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        MatTooltipModule,
        RouterModule,
        MatIconModule
    ],
    exports: [
        ...COMPONENTS
    ],
    providers: [
        ...SERVICES
    ]
})
export class CoreModule {
}
