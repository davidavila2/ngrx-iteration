import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Apex } from '@workspace/core-data';

@Component({
  selector: 'workspace-apex-details',
  templateUrl: './apex-details.component.html',
  styleUrls: ['./apex-details.component.scss']
})
export class ApexDetailsComponent {
  currentTitle;
  originalTitle;
  
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() form: FormGroup;
  @Input() set apex(value: Apex) {
    if (value) this.originalTitle = value.name;
    this.currentTitle = Object.assign({}, value);
  }

  save() {
    this.saved.emit(this.form.value);
  }

  cancel() {
    this.cancelled.emit();
  }
}
