import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IFollower} from '../../../fake-backend/followers.backend';

@Component({
  selector: 'scam-level-followers-list',
  templateUrl: './level-followers-list.component.html'
})
export class LevelFollowersListComponent {

  @Input() public followers: IFollower[] = [];
  @Output() public deleteAllFollowers = new EventEmitter<void>();

}
