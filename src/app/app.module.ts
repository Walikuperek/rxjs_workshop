import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ANGULAR_SPECIFIC_MODULES = [
    BrowserModule,
    AppRoutingModule
];

const MODULES = [
    CoreModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      ...ANGULAR_SPECIFIC_MODULES,
      ...MODULES,
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
