import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LevelOneComponent} from './level-one.component';

const routes: Routes = [
    {
        path: '', component: LevelOneComponent
    },
    {
        path: 'follower/:id',
        loadChildren: () => import('./follower/follower.module').then(m => m.FollowerModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LevelOneRoutingModule {
}
