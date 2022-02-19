import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelFollowersListComponent } from './level-followers-list/level-followers-list.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [
        LevelFollowersListComponent
    ],
    exports: [
        LevelFollowersListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LevelFollowersListModule { }
