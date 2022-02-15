import {Component} from '@angular/core';
import {EventBusService} from './event-bus.service';
import {Events} from './events.enum';
import {EventStoreService} from './event-store.service';
import {RandomStringService} from '../../core/services/random-string.service';
import {AlertType} from '../../scam/alert/alert/alert.component';

@Component({
    selector: 'app-level-three-reactive',
    templateUrl: './level-three-reactive.component.html'
})
export class LevelThreeReactiveComponent {
    public AlertType = AlertType;
    public Events = Events;

    constructor(
        public eventStore: EventStoreService,
        private _eventBus: EventBusService,
        private _randomStr: RandomStringService) {
    }

    public onEventToBeFired($event: string): void {
        switch ($event) {
            case Events.ContentAdded:
                this._eventBus.emit($event, {
                    author: this._randomStr.randomName()
                });
                break;
            case Events.ContentRemoved:
                this._eventBus.emit($event, {
                    deleted: true
                });
                break;
            default:
                break;
        }
    }

    public clearEvents(): void {
        if (!this.eventStore.eventsExists()) {
            return alert('Brak eventów do usunięcia');
        }
        const confirmed = confirm('Czy na pewno chcesz usunąć wszystkie eventy?');
        if (confirmed) {
            this.eventStore.clearEvents();
            this._eventBus.emit(Events.EventsDestroyed, {deletedAll: true});
        }
    }
}
