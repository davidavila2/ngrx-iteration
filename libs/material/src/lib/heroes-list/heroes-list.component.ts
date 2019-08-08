import { OnInit, AfterViewInit, Component, ViewChild, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HeroesListDataSource } from './heroes-list-datasource';

@Component({
  selector: 'workspace-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnChanges {
  @Input() marvelData;
  @Output() deleted = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: HeroesListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'thumbnail'];

  constructor() {}

  ngOnInit() {
    // this.marvelService.all().pipe(tap(res => { this.marvelData = res; console.log(res)})).subscribe();
  }

  ngOnChanges() {
    if (this.marvelData) {
      this.dataSource = new HeroesListDataSource(this.paginator, this.sort, this.marvelData);
    }
  }

  alert(row) {
    const confirmation = confirm(`Are you sure you want to delete ${row.name}`);
    if (confirmation) {
      this.deleted.emit(row);
    }
  }
}
