import {Component, Input} from '@angular/core';

@Component({
  selector: 'scam-unordered-list',
  templateUrl: './unordered-list.component.html'
})
export class UnorderedListComponent {

  @Input() public icon = 'list';
  @Input() public title = 'Lista';
  @Input() public list: string[] = [];

}
