import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'scam-level-header',
    templateUrl: './level-header.component.html'
})
export class LevelHeaderComponent {

    @Input() public angularLogo = false;

    @Output() public followClick = new EventEmitter<void>();

}
