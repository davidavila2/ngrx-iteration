import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'workspace-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit  {
  currentTitle;
  originalTitle;
  myForm: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set apex(value) {
    // changes value.name to value.id
    if (value) this.originalTitle = value.name;
    this.currentTitle = Object.assign({}, value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      function: ['', [
        Validators.required
      ]]
    })
  }

  get name() {
    return this.myForm.get('name')
  }

  get function() {
    return this.myForm.get('function')
  }
}
