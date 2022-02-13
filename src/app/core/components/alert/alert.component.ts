import {Component, Input} from '@angular/core';

export enum AlertType {
  Light,
  Info,
}

@Component({
  selector: 'core-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  public AlertType = AlertType;

  @Input() type: AlertType = AlertType.Info;
  @Input() message = '';

}
