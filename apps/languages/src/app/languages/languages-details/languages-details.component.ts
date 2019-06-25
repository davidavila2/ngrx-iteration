import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'workspace-languages-details',
  templateUrl: './languages-details.component.html',
  styleUrls: ['./languages-details.component.scss']
})
export class LanguagesDetailsComponent {
  currentProject;
  originalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value)
  }
}
