import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {
  currentRick;
  originalRick;
  myForm

  // gender: any = ['Male', 'Female', 'NonBinary', 'Unicorn', 'IT']

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set rick(value) {
    if (value) this.originalRick = value.id;
    this.currentRick = Object.assign({}, value)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2), 
      ]],
      status: ['', [
        Validators.required,
        Validators.minLength(4), 
      ]],
      genderSelect: ['', [
        Validators.required,
        // Validators.minLength(4),
      ]]
    });
  }

  // changeGender() {
  //   this.genderSelect.setValue()
  // }

  get name() {
    return this.myForm.get('name');
  }

  get status() {
    return this.myForm.get('status');
  }

  get genderValue() {
    return this.myForm.get('gender');
  }
}