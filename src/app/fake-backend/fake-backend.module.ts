import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FollowersHttpSimulator} from './followers.backend';
import {AddedGamesHttpSimulator} from './added-games.backend';

const BACKENDS = [
    FollowersHttpSimulator,
    AddedGamesHttpSimulator
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...BACKENDS
  ]
})
export class FakeBackendModule { }
