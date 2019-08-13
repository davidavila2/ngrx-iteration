import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as OnepieceActions from './onepiece.actions';
import { OnepieceActionTypes } from './onepiece.actions'
import { OnepieceState } from './onepiece.reducer';
import { selectOnepieceLoadingStatus, selectAllOnepiece, selectCurrentOnepiece } from './onepiece.selectors';
import { Onepiece } from '@workspace/core-data';

@Injectable({ providedIn: 'root' })
export class OnepieceFacade {
  onepiece$ = this.store.pipe(select(selectAllOnepiece));
  currentOnepiece$ = this.store.pipe(select(selectCurrentOnepiece))
  isOnepieceLoading$ = this.store.pipe(select(selectOnepieceLoadingStatus));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === OnepieceActionTypes.ADD_ONEPIECE
        || action.type === OnepieceActionTypes.UPDATE_ONEPIECE
        || action.type === OnepieceActionTypes.DELETE_ONEPIECE)
    )

  constructor(private store: Store<OnepieceState>, private actions$: ActionsSubject) { }

  selectOnepiece(onepieceId: number) {
    this.store.dispatch(new OnepieceActions.OnepieceSelected(onepieceId))
  }

  loadOnepiece() {
    this.store.dispatch(new OnepieceActions.LoadOnepiece())
  }

  createOnepiece(onepiece: Onepiece) {
    this.store.dispatch(new OnepieceActions.AddOnepiece(onepiece))
  }

  updateOnepiece(onepiece: Onepiece) {
    this.store.dispatch(new OnepieceActions.UpdateOnepiece(onepiece))
  }

  deleteOnepiece(onepiece: Onepiece) {
    this.store.dispatch(new OnepieceActions.DeleteOnepiece(onepiece))
  }
}