import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolvedLevelOneComponent } from './solved-level-one.component';

const routes: Routes = [{ path: '', component: SolvedLevelOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedLevelOneRoutingModule {}
