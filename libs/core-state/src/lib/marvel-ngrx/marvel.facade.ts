import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as MarvelActions from './marvel.actions';
import { MarvelState } from './marvel.reducer';
import { selectCurrentMarvel, selectAllMarvel, selectMarvelLoadingStatus } from './marvel.selectors';
import { MarvelActionsTypes } from './marvel.actions'
import { MarvelCharacters } from '@workspace/core-data';

@Injectable({ providedIn: 'root' })
export class MarvelFacade {
  marvel$ = this.store.pipe(select(selectAllMarvel));
  currentMarvel$ = this.store.pipe(select(selectCurrentMarvel));
  isMarvelLoading$ = this.store.pipe(select(selectMarvelLoadingStatus));

  mutation$ = this.actions$
    .pipe(
      filter(action => 
        action.type === MarvelActionsTypes.ADD_MARVEL
        || action.type === MarvelActionsTypes.UPDATE_MARVEL
        || action.type === MarvelActionsTypes.DELETE_MARVEL)
  )

  constructor(private store: Store<MarvelState>, private actions$: ActionsSubject) { }
  
  selectMarvel(MarvelId: string) {
    this.store.dispatch(new MarvelActions.MarvelSelected(MarvelId))
  }

  loadMarvel() {
    this.store.dispatch(new MarvelActions.LoadMarvel())
  }

  createMarvel(marvelCharacter: MarvelCharacters) {
    this.store.dispatch(new MarvelActions.AddMarvel(marvelCharacter));
  }

  updateMarvel(marvelCharacter: MarvelCharacters) {
    this.store.dispatch(new MarvelActions.UpdateMarvel(marvelCharacter))
  }

  deleteMarvel(marvelCharacter: MarvelCharacters) {
    this.store.dispatch(new MarvelActions.DeleteMarvel(marvelCharacter))
  }
}