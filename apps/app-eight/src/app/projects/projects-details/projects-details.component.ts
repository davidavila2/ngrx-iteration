import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'workspace-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  currentSmashbro;
  originalCharacter;
  myForm;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set supersmashbros(value) {
    if (value) this.originalCharacter = value.Name;
    this.currentSmashbro = Object.assign({}, value)
  }

  constructor (private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      game: ['', [
        Validators.required
      ]],
      displayName: ['', [
        Validators.required
      ]]
    });
  }

  get name() {
    return this.myForm.get('name')
  }

  get game() {
    return this.myForm.get('game')
  }

  get displayName() {
    return this.myForm.get('displayName')
  }
}