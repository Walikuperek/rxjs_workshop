import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../event-bus.service';
import { Events } from '../../events.enum';

@Component({
  selector: 'level-content-authors-counter',
  templateUrl: './content-authors-counter.component.html',
})
export class ContentAuthorsCounterComponent implements OnInit {
  public counterOfAuthors = 0;

  constructor(private _eventBus: EventBusService) {}

  ngOnInit(): void {
    this._eventBus.on(Events.ContentAdded, () => {
      this.counterOfAuthors++;
    });

    this._eventBus.on(Events.ContentRemoved, () => {
      this.counterOfAuthors--;
      if (this.counterOfAuthors < 0) {
        this.counterOfAuthors = 0;
      }
    });

    this._eventBus.on(Events.EventsDestroyed, () => {
      this.counterOfAuthors = 0;
    });
  }
}
