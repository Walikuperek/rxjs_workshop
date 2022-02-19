import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolvedLevelThreeComponent } from './solved-level-three.component';

const routes: Routes = [{ path: '', component: SolvedLevelThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolvedLevelThreeRoutingModule { }
