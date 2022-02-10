import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelThreeComponent } from './level-three.component';

const routes: Routes = [{ path: '', component: LevelThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelThreeRoutingModule { }
