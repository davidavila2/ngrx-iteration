import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { MarvelService, MarvelCharacters } from '@workspace/core-data';
import { MarvelState } from './marvel.reducer';
import { MarvelActionsTypes, LoadMarvel, MarvelLoaded, AddMarvel, MarvelAdded, UpdateMarvel, MarvelUpdated, DeleteMarvel, MarvelDeleted } from './marvel.actions';


@Injectable()
export class MarvelEffects {
  @Effect()
  loadMarvel$ = this.dataPersistence.fetch(MarvelActionsTypes.LOAD_MARVEL, {
    run: (action: LoadMarvel, state: MarvelState) => {
      return this.marvelService.all().pipe(map((res: MarvelCharacters[]) => new MarvelLoaded(res)))
    },
    onError: (action: LoadMarvel, error) => {
      console.error('Load Marvel Effects', error)
    }
  });

  @Effect()
  addMarvel$ = this.dataPersistence.pessimisticUpdate(MarvelActionsTypes.ADD_MARVEL, {
    run: (action: AddMarvel, state: MarvelState) => {
      return this.marvelService.create(action.payload).pipe(map((res: MarvelCharacters) => new MarvelAdded(res)))
    },
    onError: (action: AddMarvel, error) => {
      console.error('Add Marvel Effect', error)
    }
  });

  @Effect() 
  updateMarvel$ = this.dataPersistence.pessimisticUpdate(MarvelActionsTypes.UPDATE_MARVEL, {
    run: (action: UpdateMarvel, state: MarvelState) => {
      return this.marvelService.update(action.payload).pipe(map((res: MarvelCharacters) => new MarvelUpdated(res)))
    },
    onError: (action: UpdateMarvel, error) => {
      console.error('Update Marvel Effect', error)
    }
  });

  @Effect() 
  deleteMarvel$ = this.dataPersistence.pessimisticUpdate(MarvelActionsTypes.DELETE_MARVEL, {
    run: (action: DeleteMarvel, state: MarvelState) => {
      return this.marvelService.delete(action.payload.id).pipe(map((res: MarvelCharacters) => new MarvelDeleted(action.payload)))
    },
    onError: (action: DeleteMarvel, error) => {
      console.error('Delete Marvel Effect', error)
    }
    })

    constructor(
      private actions$: Actions,
      private dataPersistence: DataPersistence<MarvelState>,
      private marvelService: MarvelService
  ) {}
}