import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { AmiiboState } from './amiibo.reducer';
import { AmiiboService, Amiibo } from '@workspace/core-data';
import { AmiiboActionTypes, LoadAmiibo, AmiiboLoaded, AddAmiibo, AmiiboAdded, UpdateAmiibo, AmiiboUpdated, DeleteAmiibo, AmiiboDeleted } from './amiibo.actions';

@Injectable()
export class AmiiboEffects {
  @Effect()
  loadAmiibos$ = this.dataPersistence.fetch(AmiiboActionTypes.LOAD_AMIIBO, {
    run: (action: LoadAmiibo, state: AmiiboState) => {
      return this.amiiboService.all().pipe(map((res: Amiibo[]) => new AmiiboLoaded(res)))
    },
    onError: (action: LoadAmiibo, error) => {
      console.error('Load Amiibo Effect', error)
    }
  });

  @Effect()
  addAmiibo$ = this.dataPersistence.pessimisticUpdate(AmiiboActionTypes.ADD_AMIIBO, {
    run: (action: AddAmiibo, state: AmiiboState) => {
      return this.amiiboService.create(action.payload).pipe(map((res: Amiibo) => new AmiiboAdded(res)))
    },
    onError: (action: AddAmiibo, error) => {
      console.error('Load Amiibo Effect', error)
    }
  });

  @Effect()
  UpdateAmiibo$ = this.dataPersistence.pessimisticUpdate(AmiiboActionTypes.UPDATE_AMIIBO, {
    run: (action: UpdateAmiibo, state: AmiiboState) => {
      return this.amiiboService.update(action.payload).pipe(map((res: Amiibo) => new AmiiboUpdated(res)))
    },
    onError: (action: UpdateAmiibo, error) => {
      console.error('Delete Amiibo Effect', error)
    }
  })

  @Effect()
  deleteAmiibo$ = this.dataPersistence.pessimisticUpdate(AmiiboActionTypes.DELETE_AMIIBO, {
    run: (action: DeleteAmiibo, state: AmiiboState) => {
      return this.amiiboService.delete(action.payload).pipe(map((res: Amiibo) => new AmiiboDeleted(action.payload)))
    },
    onError: (action: DeleteAmiibo, error) => {
      console.error('Delete Amiibo Effect', error)
    }
  })

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AmiiboState>,
    private amiiboService: AmiiboService
  ) { }
}