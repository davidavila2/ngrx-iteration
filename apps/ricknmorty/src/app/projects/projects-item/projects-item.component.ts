import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickFacade } from '@workspace/core-state';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent implements OnInit {
  private _rickItem$;
  get rickItem$() {
    return this._rickItem$;
  }
  set rickItem$(value) {
    this._rickItem$ = value
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickFacade: RickFacade   
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.rickFacade.selectRick(id)
    });
    this._rickItem$ = this.rickFacade.currentRick$
  }

}
