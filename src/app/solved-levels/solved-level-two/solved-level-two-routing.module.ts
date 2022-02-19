import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolvedLevelTwoComponent } from './solved-level-two.component';

const routes: Routes = [{ path: '', component: SolvedLevelTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolvedLevelTwoRoutingModule { }
