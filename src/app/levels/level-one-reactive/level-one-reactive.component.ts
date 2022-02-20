import { Component, OnInit } from '@angular/core';
import {
  FollowersHttpSimulator,
  IFollower,
} from '../../fake-backend/followers.backend';
import { FollowersReactiveService } from './followers-reactive.service';
import {combineLatest, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertType } from '../../scam/alert/alert/alert.component';

@Component({
  selector: 'level-one-reactive',
  templateUrl: './level-one-reactive.component.html',
})
export class LevelOneReactiveComponent implements OnInit {
  public AlertType = AlertType;

  public vm$: Observable<{ count: number; followers: IFollower[] }> | null =
    null;

  constructor(
    public followersRxService: FollowersReactiveService,
    private _fakeBackend: FollowersHttpSimulator
  ) {}

  ngOnInit() {
    // TODO: 6. Implement combineLatest and map for vm$.count and vm$.followers
    this.vm$ = of({ count: 0, followers: [] });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Handlers
  public onFollowClick(): void {
    this.addFollower();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  public addFollower() {
    const follower = this._fakeBackend.randomFollower();
    this.followersRxService.create(follower).subscribe();
  }

  public deleteOne(follower: IFollower) {
    this.followersRxService.delete(follower).subscribe();
  }

  public deleteAllFollowers() {
    if (this.followersRxService.count() === 0) {
      return alert('Brak followersów do usunięcia');
    }
    const confirmed = confirm(
      'Czy na pewno chcesz usunąć wszystkich followersów?'
    );
    if (confirmed) {
      this.followersRxService.deleteAll().subscribe();
    }
  }
}
