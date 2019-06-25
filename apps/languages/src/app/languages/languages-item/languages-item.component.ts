import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '@workspace/core-data';

@Component({
  selector: 'workspace-languages-item',
  templateUrl: './languages-item.component.html',
  styleUrls: ['./languages-item.component.scss']
})
export class LanguagesItemComponent implements OnInit {
  private _homeItem$;
  public get homeItem$() {
    return this._homeItem$
  }
  public set homeItem$(value) {
    this._homeItem$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.homeItem$ = this.itemsService.findOne(id)
    })
  }

}
