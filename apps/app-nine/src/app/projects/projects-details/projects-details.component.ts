import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Nine } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  currentCharacter;
  originalCharacter;
  myForm: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set nine(value) {
    if (value) this.originalCharacter = value.name;
    this.currentCharacter = Object.assign({}, value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required
      ]],
      species: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      house: ['', [
        Validators.required
      ]],
      ancestry: ['', [
        Validators.required
      ]],
      dateOfBirth: ['', [
        Validators.required
      ]],
      actor: ['', [
        Validators.required
      ]]
    })
  }

  get name() {
    return this.myForm.get('name')
  }

  get species() {
    return this.myForm.get('species')
  }

  get gender() {
    return this.myForm.get('gender')
  }

  get house() {
    return this.myForm.get('house')
  }

  get ancestry() {
    return this.myForm.get('ancestry')
  }

  get dateOfBirth() {
    return this.myForm.get('dateOfBirth')
  }

  get actor() {
    return this.myForm.get('actor')
  }
}
