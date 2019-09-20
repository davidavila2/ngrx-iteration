import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Apex } from '@workspace/core-data';

@Component({
  selector: 'workspace-apex-list',
  templateUrl: './apex-list.component.html',
  styleUrls: ['./apex-list.component.scss']
})
export class ApexListComponent {
  @Input() apex: Apex[];
  @Input() loading: boolean
  @Input() readonly = false;
  @Output() selected = new EventEmitter()
  @Output() deleted = new EventEmitter()

  delete(character: Apex, event: any): void {
    event.stopImmediatePropagation();
    this.deleted.emit(character);
  }

  select(character: Apex) {
    this.selected.emit(character)
  }
}
