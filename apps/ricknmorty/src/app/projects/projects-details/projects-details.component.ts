import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentRick;
  originalRick;

  constructor(private fb: FormBuilder) { }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set rick(value) {
    if (value) this.originalRick = value.id;
    this.currentRick = Object.assign({}, value)
  }
}