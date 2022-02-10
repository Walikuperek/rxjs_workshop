import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelThreeReactiveComponent } from './level-three-reactive.component';

const routes: Routes = [{ path: '', component: LevelThreeReactiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelThreeReactiveRoutingModule { }
