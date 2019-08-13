import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'workspace-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentOnepiece;
  originalOnepiece;

  constructor(private fb: FormBuilder) { }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();


  @Input() set onepiece(value) {
    if (value) this.originalOnepiece = value.title;
    this.currentOnepiece = Object.assign({}, value)
  }
}
