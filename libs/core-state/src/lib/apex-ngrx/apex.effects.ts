import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { ApexState } from './apex.reducer';
import { ApexService, Apexx } from '@workspace/core-data';
import { ApexActionTypes, LoadApex, ApexLoaded, AddApex, ApexAdded, UpdateApex, ApexUpdated, DeleteApex, ApexDeleted } from './apex.actions';
import { of } from 'rxjs';

@Injectable()
export class ApexEffects {
  @Effect()
  loadApex$ = this.dataPersistence.fetch(ApexActionTypes.LOAD_APEX, {
    run: (action: LoadApex, state: ApexState) => {
      return this.apexService.all().pipe(map((res: Apexx[]) => new ApexLoaded(res)))
    },
    onError: (action: LoadApex, error) => {
      console.error('Load Apex Effects', error)
    }
  });

  @Effect()
  addApex$ = this.dataPersistence.pessimisticUpdate(ApexActionTypes.ADD_APEX, {
    run: (action: AddApex, state: ApexState) => {
      return this.apexService.create(action.payload).pipe(map((res: Apexx) => new ApexAdded(res)))
    },
    onError: (action: AddApex, error) => {
      console.error('Add Apex Effect', error)
    }
  })

  @Effect()
  updateApex$ = this.dataPersistence.pessimisticUpdate(ApexActionTypes.UPDATE_APEX, {
    run: (action: UpdateApex, state: ApexState) => {
      return of(action.payload).pipe(map((res: Apexx) => new ApexUpdated(res)))
    },
    onError: (action: UpdateApex, error) => {
      console.error('Update Apex Effect', error)
    }
  })

  @Effect()
  deleteApex$ = this.dataPersistence.pessimisticUpdate(ApexActionTypes.DELETE_APEX, {
    run: (action: DeleteApex, state: ApexState) => {
      return of(action.payload).pipe(map((res: Apexx) => new ApexDeleted(res)))
    },
    onError: (action: DeleteApex, error) => {
      console.error('Delete Apex Effect', error)
    }
  })

    constructor(
      private actions$: Actions,
      private dataPersistence: DataPersistence<ApexState>,
      private apexService: ApexService
    ) { }
}