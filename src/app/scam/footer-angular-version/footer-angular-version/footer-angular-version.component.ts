import {Component, Input, VERSION} from '@angular/core';

@Component({
  selector: 'scam-footer-angular-version',
  templateUrl: './footer-angular-version.component.html'
})
export class FooterAngularVersionComponent {
  public version = VERSION;

  @Input() public text = '';
}
