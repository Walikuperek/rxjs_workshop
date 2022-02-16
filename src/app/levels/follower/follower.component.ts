import { Component, OnInit } from '@angular/core';
import { IFollower } from '../../fake-backend/followers.backend';
import { FollowersService } from '../level-one/followers.service';
import { ActivatedRoute } from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
})
export class FollowerComponent implements OnInit {
  public follower: IFollower | undefined = undefined;

  public isInitialized = false;

  constructor(
    private _route: ActivatedRoute,
    private _followersService: FollowersService
  ) {}

  ngOnInit(): void {
    /**
     * RxJS way of solving below problem
     *
     * Common issue with subscribe inside another subscribe
     *    this._route.params.subscribe((params) => {
     *        const id = params.id;
     *        this._followersService.findOne(id).subscribe((follower) => {
     *            this.follower = follower;
     *            this.isInitialized = true;
     *        });
     *    });
     *                        |
     *  Can be simplified to \/
     */
    this._route.params.pipe(
        map(params => params.id),
        switchMap(id => this._followersService.findOne(id))
    ).subscribe(follower => {
      this.follower = follower;
      this.isInitialized = true;
    });
  }

  public goBack(): void {
    window.history.back();
  }

  public unfollow(): void {
    if (this.follower) {
      this._followersService
          .delete(this.follower)
          .subscribe(() => this.goBack());
    }
  }
}
