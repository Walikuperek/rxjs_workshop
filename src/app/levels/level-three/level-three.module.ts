import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelThreeRoutingModule } from './level-three-routing.module';
import { LevelThreeComponent } from './level-three.component';
import {AlertModule} from "../../scam/alert/alert.module";

@NgModule({
  declarations: [LevelThreeComponent],
    imports: [CommonModule, LevelThreeRoutingModule, AlertModule],
})
export class LevelThreeModule {}
