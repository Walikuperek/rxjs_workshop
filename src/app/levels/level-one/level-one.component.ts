import {Component, OnInit} from '@angular/core';
import {AlertType} from '../../core/components/alert/alert.component';
import {FollowersHttpSimulator, IFollower} from '../../fake-backend/followers.backend';
import {FollowersService} from './followers.service';

@Component({
    selector: 'level-one',
    templateUrl: './level-one.component.html'
})
export class LevelOneComponent implements OnInit {
    public AlertType = AlertType;
    public followers: IFollower[] = [];

    constructor(
        private _backend: FollowersHttpSimulator,
        private _followersService: FollowersService,
    ) {
    }

    ngOnInit(): void {
        this.getFollowers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Handlers
    public onFollowClick(): void {
        this.addFollower();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    public getFollowers() {
        this._followersService.find().subscribe(followers => {
            this.followers = followers;
        });
    }

    public addFollower() {
        const follower = this._backend.randomFollower();
        this._followersService.create(follower).subscribe(res => {
            this.followers.push(res);
        });
    }

    public deleteOne(follower: IFollower) {
        this._followersService.delete(follower).subscribe(() => {
            this.followers = this.followers.filter(f => f.id !== follower.id);
        });
    }

    public deleteAllFollowers() {
        if (this.followers.length === 0) {
            return alert('Brak followersów do usunięcia');
        }
        const confirmed = confirm('Czy na pewno chcesz usunąć wszystkich followers?');
        if (confirmed) {
            this._followersService.deleteAll().subscribe((res) => {
                if (res.deleted) {
                    this.followers = [];
                }
            });
        }
    }

}
