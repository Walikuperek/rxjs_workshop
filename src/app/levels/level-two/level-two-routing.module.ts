import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelTwoComponent } from './level-two.component';

const routes: Routes = [{ path: '', component: LevelTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelTwoRoutingModule { }
