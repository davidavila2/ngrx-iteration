import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '@workspace/core-data';

@Component({
  selector: 'workspace-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent {
  @Input() items: Item[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter()
}
