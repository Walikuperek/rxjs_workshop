import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelTwoReactiveRoutingModule } from './level-two-reactive-routing.module';
import { LevelTwoReactiveComponent } from './level-two-reactive.component';


@NgModule({
  declarations: [
    LevelTwoReactiveComponent
  ],
  imports: [
    CommonModule,
    LevelTwoReactiveRoutingModule
  ]
})
export class LevelTwoReactiveModule { }
