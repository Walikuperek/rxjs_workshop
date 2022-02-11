import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FakeBackendModule} from './fake-backend/fake-backend.module';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

const ANGULAR_SPECIFIC_MODULES = [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
];

const MODULES = [
    CoreModule,
    FakeBackendModule,
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        ...ANGULAR_SPECIFIC_MODULES,
        ...MODULES,
        HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
        }
      }
    }
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
