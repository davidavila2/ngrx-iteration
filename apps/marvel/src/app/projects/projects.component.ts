import { Component, OnInit } from '@angular/core';
import { MarvelCharacters } from '@workspace/core-data';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { MarvelFacade } from '@workspace/core-state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  pageEvent: PageEvent;
  marvel$: Observable<MarvelCharacters[]> = this.marvelFacade.marvel$;
  currentMarvel$: Observable<MarvelCharacters> = this.marvelFacade.currentMarvel$;
  isLoading$: Observable<boolean> = this.marvelFacade.isMarvelLoading$;

  constructor(private marvelFacade: MarvelFacade) { }
  
  ngOnInit() {
    this.marvelFacade.loadMarvel();
  }

  selectMarvel(marvel) {
    this.marvelFacade.selectMarvel(marvel.id)
  }


  saveMarvel(marvel) {
    marvel.id ? 
      this.marvelFacade.updateMarvel(marvel) :
      this.marvelFacade.updateMarvel(marvel)
  }

  updateMarvel(marvel) {
    this.marvelFacade.updateMarvel(marvel)
  }

  createMarvel(marvel) {
    this.marvelFacade.createMarvel(marvel)
  }

  deleteMarvel(marvel) {
    this.marvelFacade.deleteMarvel(marvel)
  }

  // marvel$;

  // constructor(private marvelService: MarvelService) { }

  // ngOnInit() {
  //   this.getMarvel();
  // }

  // getMarvel() {
  //   this.marvel$ = this.marvelService.all();
  // }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => str)
  // }

}
