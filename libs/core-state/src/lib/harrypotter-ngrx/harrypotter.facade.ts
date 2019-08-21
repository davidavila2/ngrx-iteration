import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as HarrypotterActions from './harrypotter.actions';
import { selectAllHarrypotter, selectCurrentHarrypotter, selectHarrypotterLoadingStatus, } from './harrypotter.selectors';
import { HarrypotterActionTypes } from './harrypotter.actions';
import { HarrypotterState } from './harrypotter.reducer';
import { Nine } from '@workspace/core-data';

@Injectable({ providedIn: 'root' })
export class HarrypotterFacade {
  harrypotter$ = this.store.pipe(select(selectAllHarrypotter));
  currentHarrypotter$ = this.store.pipe(select(selectCurrentHarrypotter))
  isHarrypotterLoading$ = this.store.pipe(select(selectHarrypotterLoadingStatus))

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === HarrypotterActionTypes.ADD_HARRYPOTTER
        || action.type === HarrypotterActionTypes.UPDATE_HARRYPOTTER
        || action.type === HarrypotterActionTypes.DELETE_HARRYPOTTER)
  )
  
  constructor(private store: Store<HarrypotterState>, private actions$: ActionsSubject) { }
  
  selectHarrypotter(harrypotterId: string) {
    this.store.dispatch(new HarrypotterActions.HarrypotterSelected(harrypotterId))
  }

  loadHarrypotter() {
    this.store.dispatch(new HarrypotterActions.LoadHarrypotter())
  }

  createHarrypotter(harrypotter: Nine) {
    this.store.dispatch(new HarrypotterActions.AddHarrypotter(harrypotter))
  }

  updateHarrypotter(harrypotter: Nine) {
    this.store.dispatch(new HarrypotterActions.UpdateHarrypotter(harrypotter))
  }

  deleteHarrypotter(harrypotter: Nine) {
    this.store.dispatch(new HarrypotterActions.DeleteHarrypotter(harrypotter))
  }
}