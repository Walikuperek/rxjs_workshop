import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'level-1',
    loadChildren: () =>
      import('./levels/level-one/level-one.module').then(
        (m) => m.LevelOneModule
      ),
  },
  {
    path: 'level-2',
    loadChildren: () =>
      import('./levels/level-two/level-two.module').then(
        (m) => m.LevelTwoModule
      ),
  },
  {
    path: 'level-3',
    loadChildren: () =>
      import('./levels/level-three/level-three.module').then(
        (m) => m.LevelThreeModule
      ),
  },
  {
    path: 'level-1-reactive',
    loadChildren: () =>
      import('./levels/level-one-reactive/level-one-reactive.module').then(
        (m) => m.LevelOneReactiveModule
      ),
  },
  {
    path: 'level-2-reactive',
    loadChildren: () =>
      import('./levels/level-two-reactive/level-two-reactive.module').then(
        (m) => m.LevelTwoReactiveModule
      ),
  },
  {
    path: 'level-3-reactive',
    loadChildren: () =>
      import('./levels/level-three-reactive/level-three-reactive.module').then(
        (m) => m.LevelThreeReactiveModule
      ),
  },
  {
    path: 'solved-level-1',
    loadChildren: () =>
      import('./solved-levels/solved-level-one/solved-level-one.module').then(
        (m) => m.SolvedLevelOneModule
      ),
  },
  { path: 'solved-level-2', loadChildren: () => import('./solved-levels/solved-level-two/solved-level-two.module').then(m => m.SolvedLevelTwoModule) },
  { path: 'solved-level-3', loadChildren: () => import('./solved-levels/solved-level-three/solved-level-three.module').then(m => m.SolvedLevelThreeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
