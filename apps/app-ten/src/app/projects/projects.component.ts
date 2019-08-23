import { Component, OnInit } from '@angular/core';
import { Apexx, emptyApex } from '@workspace/core-data';
import { ApexFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  apex$: Observable<Apexx[]> = this.apexFacade.apex$;
  currentApex$: Observable<any> = this.apexFacade.currentApex$;
  isLoading$: Observable<boolean> = this.apexFacade.isApexLoading$;
  form: FormGroup;

  constructor(
    private apexFacade: ApexFacade,
    private formBuilder: FormBuilder
  ) { }

  resetApex() {
  // changed .name to .id
    this.selectApex(emptyApex)
  }

  ngOnInit() {
    this.resetApex()
    this.apexFacade.loadApex();
    this.apexFacade.mutations$.subscribe(_ => this.resetApex());
    this.initForm()
  }

  selectApex(apex) {
    //changed .name to .id
    this.apexFacade.selectApex(apex.id)
  }

  saveApex(apex) {
    //changed apex.name to apex.id and it works now lol
    apex.id ?
      this.apexFacade.updateApex(apex) :
      this.apexFacade.createApex(apex)
  }

  updateApex(apex) {
    this.apexFacade.updateApex(apex)
  }

  // createApex(apex) {
  //   this.apexFacade.createApex(apex)
  // }

  alert(apex) {
    const confirmation = confirm(`Are you sure you want to delete ${apex.name} ?`)
    if (confirmation) {
    this.apexFacade.deleteApex(apex)      
    }
  } 

  cancel() {
    this.resetApex()
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      function: ['', Validators.compose([Validators.required])]
    }, {updateOn: 'submit'})
  }
}
