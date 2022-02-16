import { Component, Input } from '@angular/core';

@Component({
  selector: 'scam-level-progress',
  templateUrl: './level-progress.component.html',
})
export class LevelProgressComponent {
  @Input() public count = 0;
}
