import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {SubNavComponent} from './components/sub-nav/sub-nav.component';
import {SvgIconsPreloaderComponent} from './components/svg-icons-preloader/svg-icons-preloader.component';
import {PageService} from './services/page/page.service';
import {MatTooltipModule} from '@angular/material/tooltip';

const COMPONENTS = [
    SideNavComponent,
    SubNavComponent,
    SvgIconsPreloaderComponent
];

const SERVICES = [
    PageService
];

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        MatTooltipModule
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
