import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FollowersHttpSimulator} from './followers.backend';

const BACKENDS = [
    FollowersHttpSimulator,
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
