import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnepieceService, Onepiece } from '@workspace/core-data';
import { OnepieceFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent implements OnInit {
  private _onepieceItem$;
  get onepieceItem$() {
    return this._onepieceItem$
  }
  set onepieceItem$(value) {
    this._onepieceItem$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private onepieceFacade: OnepieceFacade
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.onepieceFacade.selectOnepiece(id);
    });
    this._onepieceItem$ = this.onepieceFacade.currentOnepiece$;
  }

}
