import {Component, OnInit} from '@angular/core';
import {FollowersHttpSimulator} from './followers.backend';

@Component({
    selector: 'app-level-one',
    templateUrl: './level-one.component.html',
    styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent implements OnInit {

    constructor(public backend: FollowersHttpSimulator) {
    }

    ngOnInit(): void {
    }

}
