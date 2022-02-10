import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelTwoRoutingModule } from './level-two-routing.module';
import { LevelTwoComponent } from './level-two.component';


@NgModule({
  declarations: [
    LevelTwoComponent
  ],
  imports: [
    CommonModule,
    LevelTwoRoutingModule
  ]
})
export class LevelTwoModule { }
