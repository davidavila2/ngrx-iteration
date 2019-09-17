import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { ApexState } from './apex.reducer';
import { ApexService, Apex, NotifyService } from '@workspace/core-data';
import { ApexActionTypes, LoadApex, ApexLoaded, AddApex, ApexAdded, UpdateApex, ApexUpdated, DeleteApex, ApexDeleted } from './apex.actions';
import { of } from 'rxjs';

@Injectable()
export class ApexEffects {
  @Effect()
  loadApex$ = this.dataPersistence.fetch(ApexActionTypes.LOAD_APEX, {
    run: (action: LoadApex, state: ApexState) => {
      return this.apexService.all().pipe(map((res: Apex[]) => new ApexLoaded(res)))
    },
    onError: (action: LoadApex, error) => {
      this.notifyService.notify('Load Apex Effects Error', error.message)
    }
  });

  @Effect()
  addApex$ = this.dataPersistence.pessimisticUpdate(ApexActionTypes.ADD_APEX, {
    run: (action: AddApex, state: ApexState) => {
      return this.apexService.create(action.payload).pipe(map((res: Apex) => new ApexAdded(res)))
    },
    onError: (action: AddApex, error) => {
      this.notifyService.notify('Add Apex Effect Error', error.message)
    }
  })

  @Effect()
  updateApex$ = this.dataPersistence.pessimisticUpdate(ApexActionTypes.UPDATE_APEX, {
    run: (action: UpdateApex, state: ApexState) => {
      return of(action.payload).pipe(map((res: Apex) => new ApexUpdated(res)))
    },
    onError: (action: UpdateApex, error) => {
      this.notifyService.notify('Update Apex Effect Error', error.message)
    }
  })

  @Effect()
  deleteApex$ = this.dataPersistence.pessimisticUpdate(ApexActionTypes.DELETE_APEX, {
    run: (action: DeleteApex, state: ApexState) => {
      return of(action.payload).pipe(map((res: Apex) => new ApexDeleted(res)))
    },
    onError: (action: DeleteApex, error) => {
      this.notifyService.notify('Delete Apex Effect Error', error.message)
    }
  })

    constructor(
      private actions$: Actions,
      private dataPersistence: DataPersistence<ApexState>,
      private apexService: ApexService,
      private notifyService: NotifyService
    ) { }
}