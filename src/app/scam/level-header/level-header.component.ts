import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'scam-level-header',
    templateUrl: './level-header.component.html'
})
export class LevelHeaderComponent {

    @Output() public followClick = new EventEmitter<void>();

}
