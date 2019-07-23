import { Component, OnInit } from '@angular/core';
import { MarvelService } from '@workspace/core-data';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  marvel$;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  pageEvent: PageEvent;

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.getMarvel();
  }

  getMarvel() {
    this.marvel$ = this.marvelService.all();
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => str)
  }

}
