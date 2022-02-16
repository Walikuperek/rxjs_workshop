import {Component, OnInit} from '@angular/core';
import {AlertType} from '../../scam/alert/alert/alert.component';

@Component({
    selector: 'app-level-three',
    templateUrl: './level-three.component.html'
})
export class LevelThreeComponent implements OnInit {
    public AlertType = AlertType;

    constructor() {
    }

    ngOnInit(): void {
    }
}
