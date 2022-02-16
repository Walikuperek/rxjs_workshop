import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'level-header-event-buttons',
  templateUrl: './header-event-buttons.component.html',
})
export class HeaderEventButtonsComponent {
  @Output() public clearEvents: EventEmitter<void> = new EventEmitter<void>();
  @Output() public fireEvent: EventEmitter<string> = new EventEmitter<string>();
}
