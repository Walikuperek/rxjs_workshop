import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelThreeRoutingModule } from './level-three-routing.module';
import { LevelThreeComponent } from './level-three.component';
import {AlertModule} from "../../scam/alert/alert.module";
import {UnorderedListModule} from "../../scam/unordered-list/unordered-list.module";

@NgModule({
  declarations: [LevelThreeComponent],
    imports: [CommonModule, LevelThreeRoutingModule, AlertModule, UnorderedListModule],
})
export class LevelThreeModule {}
