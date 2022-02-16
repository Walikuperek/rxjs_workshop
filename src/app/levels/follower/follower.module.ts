import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowerRoutingModule } from './follower-routing.module';
import { FollowerComponent } from './follower.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FollowerComponent],
  imports: [
    CommonModule,
    FollowerRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class FollowerModule {}
