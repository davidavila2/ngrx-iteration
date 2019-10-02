import { Component, OnInit } from '@angular/core';
import { Apex } from '@workspace/core-data';
import { ApexFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, Form } from '@angular/forms';

@Component({
  selector: 'workspace-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss']
})

export class ApexComponent implements OnInit {
  form: FormGroup;
  apex$: Observable<Apex[]> = this.apexFacade.apex$;
  currentApex$: Observable<any> = this.apexFacade.currentApex$;
  isLoading$: Observable<boolean> = this.apexFacade.isApexLoading$;
  formDirective: FormGroupDirective;

  constructor(
    private fb: FormBuilder,
    private apexFacade: ApexFacade
  ) { }

  ngOnInit(): void {
    this.apexFacade.loadApex();
    this.apexFacade.mutations$.subscribe(_ => this.resetApex());
    this.initForm();
  }

  resetApex(): void {
    this.form.reset();
    this.formDirective.resetForm();
    this.selectApex({ id: null } as Apex);
  }

  selectApex(apex: Apex): void {
    this.apexFacade.selectApex(apex.id);
    this.form.patchValue(apex);
  }

  saveApex(formDirective: FormGroupDirective): void {
    if (this.form.invalid) return;
    this.formDirective = formDirective;
    if (this.form.value.id) {
      this.apexFacade.updateApex(this.form.value);
    } else {
      this.apexFacade.createApex(this.form.value);
    }
  }

  delete(apex: Apex): void {
    const confirmation = confirm(`Are you sure you want to delete ${apex.name} ?`);
    if (confirmation) {
      this.apexFacade.deleteApex(apex);
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: null,
      name: ['', Validators.compose([Validators.required])]
    });
  }
}