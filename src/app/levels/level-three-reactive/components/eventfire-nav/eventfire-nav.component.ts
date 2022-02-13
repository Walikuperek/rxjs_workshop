import {Component, EventEmitter, Output} from '@angular/core';
import {Events} from '../../events.enum';

@Component({
    selector: 'level-eventfire-nav',
    templateUrl: './eventfire-nav.component.html'
})
export class EventfireNavComponent {

    public events: {key: string; value: string}[] = [];

    @Output() public fireEvent = new EventEmitter<string>();

    constructor() {
        Object.entries(Events).forEach(([key, value]) => {
            this.events.push({ key, value });
        });
    }

    fire($event: string) {
        this.fireEvent.emit($event);
    }

}
