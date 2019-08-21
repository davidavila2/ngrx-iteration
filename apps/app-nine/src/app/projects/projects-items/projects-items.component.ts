import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarrypotterFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.scss']
})
export class ProjectsItemsComponent implements OnInit {
  _harrypotterItem$;
  get hpItem$() {
    return this._harrypotterItem$
  }
  set hpItem$(value) {
    this._harrypotterItem$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private harrypotterFacade: HarrypotterFacade
  ) { }

  ngOnInit() {
    this.harrypotterFacade.loadHarrypotter();
    this.route.params.subscribe(param => this.harrypotterFacade.selectHarrypotter(param['id']));
    this.hpItem$ = this.harrypotterFacade.currentHarrypotter$;
  }

}
