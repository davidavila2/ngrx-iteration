import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as AmiiboActions from './amiibo.actions';
import { AmiiboActionTypes } from './amiibo.actions'
import { selectCurrentAmiibo, selectAllAmiibos, selectAmiiboLoadingStatus } from './amiibo.selectors';
import { AmiiboState } from './amiibo.reducer';
import { Amiibo } from '@workspace/core-data';


@Injectable({ providedIn: 'root' })
export class AmiiboFacade {
  amiibo$ = this.store.pipe(select(selectAllAmiibos));
  currentAmiibo$ = this.store.pipe(select(selectCurrentAmiibo));
  isAmiibosLoading$ = this.store.pipe(select(selectAmiiboLoadingStatus));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === AmiiboActionTypes.ADD_AMIIBO
        || action.type === AmiiboActionTypes.UPDATE_AMIIBO
        || action.type === AmiiboActionTypes.DELETE_AMIIBO)
    )

  constructor(private store: Store<AmiiboState>, private actions$: ActionsSubject) { }
  
  selectAmiibo(amiiboId: string) {
    this.store.dispatch(new AmiiboActions.AmiiboSelected(amiiboId))
  }

  loadAmiibo() {
    this.store.dispatch(new AmiiboActions.LoadAmiibo())
  }

  createAmiibo(amiibo: Amiibo) {
    this.store.dispatch(new AmiiboActions.AddAmiibo(amiibo))
  }

  updateAmiibo(amiibo: Amiibo) {
    this.store.dispatch(new AmiiboActions.UpdateAmiibo(amiibo))
  }

  deleteAmiibo(amiibo: Amiibo) {
    this.store.dispatch(new AmiiboActions.DeleteAmiibo(amiibo))
  }
}