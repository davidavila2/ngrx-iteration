import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnepieceService, Onepiece } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent implements OnInit {
  @Input() onepiece: Onepiece[];
  private _onepieceItem$;
  public get onepieceItem$() {
    return this._onepieceItem$
  }
  public set onepieceItem$(value) {
    this._onepieceItem$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private onepieceService: OnepieceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.onepieceItem$ = this.onepieceService.findOne(id);
    })
  }

}
