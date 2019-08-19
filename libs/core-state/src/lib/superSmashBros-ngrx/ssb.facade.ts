import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as SupersmashbroActions from './ssb.actions';
import { selectAllSupersmashbros, selectCurrentSupersmashbro, selectSupersmashbroLoadingStatus } from './ssb.selector';
import { SupersmashbrosState } from './ssb.reducer';
import { SupersmashbrosActionTypes } from './ssb.actions'
import { Supersmashbros } from '@workspace/core-data';

@Injectable({ providedIn: 'root' })
export class SupersmashbroFacade {
  supersmashbro$ = this.store.pipe(select(selectAllSupersmashbros));
  currentSupersmashbro$ = this.store.pipe(select(selectCurrentSupersmashbro));
  isSupersmashbrosLoading$ = this.store.pipe(select(selectSupersmashbroLoadingStatus))

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === SupersmashbrosActionTypes.ADD_SUPERSMASHBROS
        || action.type === SupersmashbrosActionTypes.UPDATE_SUPERSMASHBROS
        || action.type === SupersmashbrosActionTypes.DELETE_SUPERSMASHBROS)
    )

  constructor(private store: Store<SupersmashbrosState>, private actions$: ActionsSubject) { }

  selectSupersmashbro(supersmashbroId: number) {
    this.store.dispatch(new SupersmashbroActions.SupersmashbrosSelected(supersmashbroId))
  }

  loadSupersmashbros() {
    this.store.dispatch(new SupersmashbroActions.LoadSupersmashbros())
  }

  createSupersmashbro(supersmashbro: Supersmashbros) {
    this.store.dispatch(new SupersmashbroActions.AddSupersmashbros(supersmashbro))
  }

  updateSupersmashbro(supersmashbro: Supersmashbros) {
    this.store.dispatch(new SupersmashbroActions.UpdateSupersmashbros(supersmashbro))
  }

  deleteSupersmashbro(supersmashbro: Supersmashbros) {
    this.store.dispatch(new SupersmashbroActions.DeleteSupersmashbros(supersmashbro))
  }
}