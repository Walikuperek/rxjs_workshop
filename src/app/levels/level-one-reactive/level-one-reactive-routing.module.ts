import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelOneReactiveComponent } from './level-one-reactive.component';

const routes: Routes = [{ path: '', component: LevelOneReactiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelOneReactiveRoutingModule {}
