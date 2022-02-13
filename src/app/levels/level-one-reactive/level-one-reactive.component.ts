import {Component, OnInit} from '@angular/core';
import {FollowersHttpSimulator, IFollower} from '../../fake-backend/followers.backend';
import {FollowersReactiveService} from './followers-reactive.service';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AlertType} from '../../core/components/alert/alert.component';

@Component({
    selector: 'level-one-reactive',
    templateUrl: './level-one-reactive.component.html'
})
export class LevelOneReactiveComponent implements OnInit {
    public AlertType = AlertType;

    public vm$: Observable<{ count: number; followers: IFollower[] }> | null = null;

    constructor(
        public followersRxService: FollowersReactiveService,
        private _fakeBackend: FollowersHttpSimulator
    ) {
    }

    ngOnInit() {
        this.vm$ = combineLatest([
            this.followersRxService.count$,
            this.followersRxService.followers$
        ]).pipe(
            map(([count, followers]) => ({count, followers}))
        );
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
        const confirmed = confirm('Czy na pewno chcesz usunąć wszystkich followers?');
        if (confirmed) {
            this.followersRxService.deleteAll().subscribe();
        }
    }

}
