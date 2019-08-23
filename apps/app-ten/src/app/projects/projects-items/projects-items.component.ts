import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApexFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.scss']
})
export class ProjectsItemsComponent implements OnInit {
  _apexItem$;
  get apexItem$() {
    return this._apexItem$;
  }
  set apexItem$(value) {
    this._apexItem$ = value
  }
  constructor(
    private route: ActivatedRoute,
    private apexFacade: ApexFacade
  ) { }

  ngOnInit() {
    this.apexFacade.loadApex();
    this.route.params.subscribe(param => this.apexFacade.selectApex(param['name']));
      this.apexItem$ = this.apexFacade.currentApex$;
  }

}
