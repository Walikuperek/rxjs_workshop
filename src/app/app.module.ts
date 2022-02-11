import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FakeBackendModule} from './fake-backend/fake-backend.module';

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
        ...MODULES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
