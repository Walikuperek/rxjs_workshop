import {Component, OnInit} from '@angular/core';
import {IFollower} from '../../../fake-backend/followers.backend';
import {FollowersService} from '../followers.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-follower',
    templateUrl: './follower.component.html'
})
export class FollowerComponent implements OnInit {
    public follower: IFollower | undefined = undefined;

    public isInitialized = false;

    constructor(
        private _route: ActivatedRoute,
        private _followersService: FollowersService) {
    }

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            const id = params.id;
            this._followersService.findOne(id).subscribe(follower => {
                this.follower = follower;
                this.isInitialized = true;
            });
        });
    }

    public goBack(): void {
        window.history.back();
    }

    public unfollow(): void {
        if (this.follower) {
            this._followersService.delete(this.follower).subscribe(() => {
                this.goBack();
            });
        }
    }

}
