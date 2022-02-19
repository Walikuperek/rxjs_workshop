import {Component, Input, OnInit} from '@angular/core';
import {AlertType} from '../../../../scam/alert/alert/alert.component';
import {IEvent} from '../../models/IEvent.interface';

@Component({
    selector: 'level-event-splitted-list',
    templateUrl: './event-splitted-list.component.html'
})
export class EventSplittedListComponent {
    public AlertType = AlertType;

    @Input() public events: IEvent[] = [];
}
