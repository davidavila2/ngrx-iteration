import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as RickActions from './ricknmorty.actions';
import { RickActionTypes } from './ricknmorty.actions';
import { selectAllRicks, selectCurrentRick, selectRickLoadingStatus } from './ricknmorty.selectors';
import { RickState } from './ricknmorty.reducer';
import { RicknmortyDetails } from '@workspace/core-data';


@Injectable({ providedIn: 'root' })
export class RickFacade {
  rick$ = this.store.pipe(select(selectAllRicks));
  currentRick$ = this.store.pipe(select(selectCurrentRick));
  isRickLoading$ = this.store.pipe(select(selectRickLoadingStatus));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === RickActionTypes.ADD_RICK
        || action.type === RickActionTypes.UPDATE_RICK
        || action.type === RickActionTypes.DELETE_RICK)
    )

  constructor(private store: Store<RickState>, private actions$: ActionsSubject) { }

  selectRick(rickId: number) {
    this.store.dispatch(new RickActions.RickSelected(rickId))
  }

  loadRick() {
    this.store.dispatch(new RickActions.LoadRick())
  }

  createRick(rick: RicknmortyDetails) {
    this.store.dispatch(new RickActions.AddRick(rick))
  }

  updateRick(rick: RicknmortyDetails) {
    this.store.dispatch(new RickActions.UpdateRick(rick))
  }

  deleteRick(rick: RicknmortyDetails) {
    this.store.dispatch(new RickActions.DeleteRick(rick))
  }
}