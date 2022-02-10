import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelOneComponent } from './level-one.component';

const routes: Routes = [{ path: '', component: LevelOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelOneRoutingModule { }
