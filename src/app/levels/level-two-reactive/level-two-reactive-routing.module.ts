import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelTwoReactiveComponent } from './level-two-reactive.component';

const routes: Routes = [{ path: '', component: LevelTwoReactiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelTwoReactiveRoutingModule { }
