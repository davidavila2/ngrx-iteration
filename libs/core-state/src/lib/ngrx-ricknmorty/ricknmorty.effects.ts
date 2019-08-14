import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { RickState } from './ricknmorty.reducer';
import { RicknmortyService, RicknmortyDetails } from '@workspace/core-data';
import { RickActionTypes, LoadRick, RickLoaded, AddRick, RickUpdated, UpdateRick, DeleteRick, RickDeleted } from './ricknmorty.actions';
import { of } from 'rxjs';


@Injectable()
export class RickEffects {
  @Effect()
  loadRick$ = this.dataPersistence.fetch(RickActionTypes.LOAD_RICK, {
    run: (action: LoadRick, state: RickState) => {
      return this.ricknmortyService.all().pipe(map((res: RicknmortyDetails[]) => new RickLoaded(res)))
    },
    onError: (action: LoadRick, error) => {
      console.error('Load Rick Effects', error)
    }
  });

  @Effect()
  addRick$ = this.dataPersistence.pessimisticUpdate(RickActionTypes.ADD_RICK, {
    run: (action: AddRick, state: RickState) => {
      return of(action.payload).pipe(map((res: RicknmortyDetails) => new RickUpdated(res)))
    },
    onError: (action: AddRick, error) => {
      console.error('Add Rick Error', error)
    }
  })

  @Effect()
  updateRick$ = this.dataPersistence.pessimisticUpdate(RickActionTypes.UPDATE_RICK, {
    run: (action: UpdateRick, state: RickState) => {
      return of(action.payload).pipe(map((res: RicknmortyDetails) => new RickUpdated(res)))
    },
    onError: (action: UpdateRick, error) => {
      console.error('Update Rick Effect', error)
    }
  })

  @Effect()
  deleteRick$ = this.dataPersistence.pessimisticUpdate(RickActionTypes.DELETE_RICK, {
    run: (action: DeleteRick, state: RickState) => {
      return of(action.payload).pipe(map((res: RicknmortyDetails) => new RickDeleted(action.payload)))
    },
    onError: (action: DeleteRick, error) => {
      console.error('Delete Rick Effect', error)
    }
  })  

    constructor(
      private actions$: Actions,
      private dataPersistence: DataPersistence<RickState>,
      private ricknmortyService: RicknmortyService
    ) { }
}