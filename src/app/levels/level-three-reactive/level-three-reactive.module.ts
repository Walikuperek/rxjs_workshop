import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelThreeReactiveRoutingModule } from './level-three-reactive-routing.module';
import { LevelThreeReactiveComponent } from './level-three-reactive.component';


@NgModule({
  declarations: [
    LevelThreeReactiveComponent
  ],
  imports: [
    CommonModule,
    LevelThreeReactiveRoutingModule
  ]
})
export class LevelThreeReactiveModule { }
