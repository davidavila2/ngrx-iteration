import { Component, OnInit } from '@angular/core';
import { ShowSomething } from '@workspace/core-data';
import { Observable } from 'rxjs';
import { StarwarsFacade } from '@workspace/core-state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  starwars$: Observable<ShowSomething[]> = this.starwarsFacade.starwars$;
  currentStarwars$: Observable<ShowSomething> = this.starwarsFacade.currentStarwars$;
  isLoading$: Observable<boolean> = this.starwarsFacade.isStarwarsLoading$;

  constructor(private starwarsFacade: StarwarsFacade) {}

  ngOnInit() {
    this.starwarsFacade.loadStarwars();
  }

  selectStarwars(starwars) {
    this.starwarsFacade.selectStarwars(starwars.id)
  }

  saveStarwars(starwars) {
    starwars.id ?
      this.starwarsFacade.updateStarwars(starwars) :
      this.starwarsFacade.createStarwars(starwars)
  }

  updateStarwars(starwars) {
    this.starwarsFacade.updateStarwars(starwars)
  }

  createStarwars(starwars) {
    this.starwarsFacade.createStarwars(starwars)
  }

  deleteStarwars(starwars) {
    this.starwarsFacade.deleteStarwars(starwars)
  }

  // funny$

  // constructor(private somethingService: SomethingService) { }

  // ngOnInit() {
  //   this.getSomething();
  // }

  // getSomething() {
  //   this.funny$ = this.somethingService.all();
  // }

}
