import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Events } from '../../events.enum';
import { IEvent } from '../../models/IEvent.interface';
import { EventBusService } from '../../event-bus.service';
import { EventStoreService } from '../../event-store.service';

@Component({
  selector: 'level-header-collapse-list',
  templateUrl: './header-collapse-list.component.html',
})
export class HeaderCollapseListComponent {
  public Events = Events;
  private _events: IEvent[] = [];

  get events(): IEvent[] {
    return this._events.filter((event) => event.type === Events.ContentAdded);
  }

  @Input() set events(value: IEvent[]) {
    this._events = value;
  }
  @Output() public fireContentAddedEvent: EventEmitter<Events> = new EventEmitter();

  constructor(
    private _eventStore: EventStoreService,
    private _eventBus: EventBusService
  ) {}
}
