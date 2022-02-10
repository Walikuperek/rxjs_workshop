import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelOneReactiveRoutingModule } from './level-one-reactive-routing.module';
import { LevelOneReactiveComponent } from './level-one-reactive.component';


@NgModule({
  declarations: [
    LevelOneReactiveComponent
  ],
  imports: [
    CommonModule,
    LevelOneReactiveRoutingModule
  ]
})
export class LevelOneReactiveModule { }
