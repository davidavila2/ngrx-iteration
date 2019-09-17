import { Component, OnInit } from '@angular/core';
import { Apex } from '@workspace/core-data';
import { ApexFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.selectApex({ id: null } as Apex);
  }

  selectApex(apex: Apex): void {
    this.apexFacade.selectApex(apex.id);
    this.form.patchValue(apex);
  }

  saveApex(apex: Apex): void {
    if (this.form.invalid) return;

    if (apex.id) {
      this.apexFacade.updateApex(apex);
    } else {
      this.apexFacade.createApex(apex);
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
      name: ['', Validators.compose([Validators.required])],
      function: ['', [Validators.compose([Validators.required])]]
    });
  }
}