import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as starwarsActions from './starwars.actions';
import { StarwarsActionTypes } from './starwars.actions';
import { selectAllStarwars, selectStarwarsLoadingStatus, selectCurrentStarwars } from './starwars.selectors';
import { StarwarsState } from './starwars.reducer';
import { ShowSomething } from '@workspace/core-data';


@Injectable({ providedIn: 'root' })
export class StarwarsFacade {
  starwars$ = this.store.pipe(select(selectAllStarwars));
  currentStarwars$ = this.store.pipe(select(selectCurrentStarwars));
  isStarwarsLoading$ = this.store.pipe(select(selectStarwarsLoadingStatus));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === StarwarsActionTypes.ADD_STARWARS
        || action.type === StarwarsActionTypes.UPDATE_STARWARS
        || action.type === StarwarsActionTypes.DELETE_STARWARS)
  )
  
  constructor(private store: Store<StarwarsState>, private actions$: ActionsSubject) { }
  
  selectStarwars(starwarsId: string) {
    this.store.dispatch(new starwarsActions.StarwarsSelected(starwarsId))
  }

  loadStarwars() {
    this.store.dispatch(new starwarsActions.LoadStarwars())
  }

  createStarwars(starwars: ShowSomething) {
    this.store.dispatch(new starwarsActions.AddStarwars(starwars))
  }

  updateStarwars(starwars: ShowSomething) {
    this.store.dispatch(new starwarsActions.UpdateStarwars(starwars))
  }

  deleteStarwars(starwars: ShowSomething) {
    this.store.dispatch(new starwarsActions.DeleteStarwars(starwars))
  }
}