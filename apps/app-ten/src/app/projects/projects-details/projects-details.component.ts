import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'workspace-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentTitle;
  originalTitle

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  
  @Input() group: FormGroup;
  @Input() set apex(value) {
    // changes value.name to value.id
    if (value) this.originalTitle = value.name;
    this.currentTitle = Object.assign({}, value)
  }

  // @Input() set character(value: Character) {
  //   this.selectedTitle = {...value}
  // }

  // save() {
  //   this.saved.emit(this.group.value)
  // }

  constructor() { }
}
