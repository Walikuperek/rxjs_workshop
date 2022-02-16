import { Component, Input } from '@angular/core';

@Component({
  selector: 'level-counter-badge',
  templateUrl: './counter-badge.component.html',
})
export class CounterBadgeComponent {
  @Input() public count = 0;
}
