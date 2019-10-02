import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Apex } from '@workspace/core-data';

@Component({
  selector: 'workspace-apex-details',
  templateUrl: './apex-details.component.html',
  styleUrls: ['./apex-details.component.scss']
})
export class ApexDetailsComponent {
  currentApex: Apex;
  originalTitle: string;

  @Output() saved = new EventEmitter<Object>();
  @Output() cancelled = new EventEmitter();
  @Input() form: FormGroup;
  @Input() set apex(value: Apex) {
    if (value) this.originalTitle = value.name;
    this.currentApex = Object.assign({}, value);
  }

  // save(): void {
  //   this.saved.emit(this.form.value);
  // }

  submitForm(form: FormGroup, formDirective: FormGroupDirective): void {
    this.saved.emit(formDirective);
    // formDirective.resetForm();
    this.form.reset();
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
