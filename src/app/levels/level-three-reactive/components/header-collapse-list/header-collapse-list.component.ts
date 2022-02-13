import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Events} from '../../events.enum';
import {IEvent} from '../../models/IEvent.interface';
import {EventBusService} from '../../event-bus.service';
import {EventStoreService} from '../../event-store.service';

@Component({
    selector: 'level-header-collapse-list',
    templateUrl: './header-collapse-list.component.html'
})
export class HeaderCollapseListComponent implements OnInit {
    public Events = Events;
    private _events: IEvent[] = [];

    @Input() set events(value: IEvent[]) {
        this._events = value;
    }

    @Output() public fireEvent: EventEmitter<Events> = new EventEmitter();

    get events(): IEvent[] {
        return this._events.filter(event => event.type === Events.ContentAdded);
    }

    constructor(
        private _eventStore: EventStoreService,
        private _eventBus: EventBusService) {
    }

    ngOnInit() {
        this.listenToContentRemoved();
    }

    listenToContentRemoved() {
        this._eventBus.on(Events.ContentRemoved, (event: IEvent) => {
            this._eventStore.removeLastEvent(Events.ContentAdded);
        });
    }
}
