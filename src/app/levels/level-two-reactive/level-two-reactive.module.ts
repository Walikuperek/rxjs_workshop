import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelTwoReactiveRoutingModule } from './level-two-reactive-routing.module';
import { LevelTwoReactiveComponent } from './level-two-reactive.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LevelTwoReactiveComponent
  ],
    imports: [
        CommonModule,
        LevelTwoReactiveRoutingModule,
        MatIconModule,
        MatTooltipModule,
        FormsModule
    ]
})
export class LevelTwoReactiveModule { }
