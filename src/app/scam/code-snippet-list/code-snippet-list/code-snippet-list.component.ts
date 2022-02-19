import {Component, Input} from '@angular/core';
import {ICodeFile} from '../ICodeFiles.interface';

@Component({
  selector: 'scam-code-snippet-list',
  templateUrl: './code-snippet-list.component.html'
})
export class CodeSnippetListComponent {

  @Input() public codeFiles: ICodeFile[] = [];
  @Input() public icon = 'code';
}
