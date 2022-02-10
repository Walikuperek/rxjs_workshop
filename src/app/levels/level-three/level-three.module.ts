import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelThreeRoutingModule } from './level-three-routing.module';
import { LevelThreeComponent } from './level-three.component';


@NgModule({
  declarations: [
    LevelThreeComponent
  ],
  imports: [
    CommonModule,
    LevelThreeRoutingModule
  ]
})
export class LevelThreeModule { }
