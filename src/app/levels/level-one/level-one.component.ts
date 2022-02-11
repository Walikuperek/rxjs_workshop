import {Component, OnInit} from '@angular/core';
import {FollowersHttpSimulator, IFollower} from '../../fake-backend/followers.backend';
import {FollowersService} from './followers.service';

@Component({
    selector: 'app-level-one',
    templateUrl: './level-one.component.html',
    styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent implements OnInit {

    public followers: any[] = [];

    constructor(
        public backend: FollowersHttpSimulator,
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
        const follower = this.backend.randomFollower();
        this._followersService.create(follower).subscribe(createdFollower => {
            console.log('Someone followed @RxJS_official_code_base', createdFollower);
        });
    }

    public deleteOne(follower: IFollower) {
        this._followersService.delete(follower).subscribe(() => {
            this.followers = this.followers.filter(f => f.id !== follower.id);
        });
    }

    public deleteAllFollowers() {
        this._followersService.deleteAll().subscribe(() => {
            this.followers = [];
        });
    }

}
