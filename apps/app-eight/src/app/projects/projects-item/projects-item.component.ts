import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupersmashbroFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent implements OnInit {
  private _supersmashItem$;
  get smashbro$() {
    return this._supersmashItem$
  }
  set smashbro$(value) {
    this._supersmashItem$ = value
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private superFacade: SupersmashbroFacade
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['OwnerId'];
      this.superFacade.selectSupersmashbro(id)
    })
    this._supersmashItem$ = this.superFacade.currentSupersmashbro$
  }

}
