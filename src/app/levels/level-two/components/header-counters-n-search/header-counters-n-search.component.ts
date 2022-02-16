import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'level-header-counters-n-search',
  templateUrl: './header-counters-n-search.component.html',
})
export class HeaderCountersNSearchComponent {
  @Input() public addedGamesLength = 0;
  @Input() public gamesLength = 0;
  @Output() public search = new EventEmitter<string>();
  @Output() public toggleAddedGamesList = new EventEmitter<void>();

  public criteria = '';
}
