import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { SupersmashbrosState } from './ssb.reducer';
import { EightService, Supersmashbros } from '@workspace/core-data';
import { SupersmashbrosActionTypes, LoadSupersmashbros, SupersmashbrosLoaded, AddSupersmashbros, SupersmashbrosAdded, UpdateSupersmashbros, SupersmashbrosUpdated, DeleteSupersmashbros, SupersmashbrosDeleted } from './ssb.actions';
import { of } from 'rxjs';


@Injectable()
export class SupersmashbrosEffects {
  @Effect()
  loadSupersmashbros$ = this.dataPersistence.fetch(SupersmashbrosActionTypes.LOAD_SUPERSMASHBROS, {
    run: (action: LoadSupersmashbros, state: SupersmashbrosState) => {
      return this.eightService.all().pipe(map((res: Supersmashbros[]) => new SupersmashbrosLoaded(res)))
    },
    onError: (action: LoadSupersmashbros, error) => {
      console.error('Load Supersmashbros Effect', error)
    }
  })

  @Effect()
  addSupersmashbros$ = this.dataPersistence.pessimisticUpdate(SupersmashbrosActionTypes.ADD_SUPERSMASHBROS, {
    run: (action: AddSupersmashbros, state: SupersmashbrosState) => {
      const generateId = Math.floor(Math.random() * (100 - 58 + 1) + 58);
      return of({ ...action.payload, OwnerId: generateId }).pipe(map((res: Supersmashbros) => new SupersmashbrosAdded(res)))
    },
    onError: (Action: AddSupersmashbros, error) => {
      console.error('Add Supersmashbros Effect', error)
    }
    })
    
  @Effect()
  updateSupersmashbros$ = this.dataPersistence.pessimisticUpdate(SupersmashbrosActionTypes.UPDATE_SUPERSMASHBROS, {
    run: (action: UpdateSupersmashbros, state: SupersmashbrosState) => {
      return of(action.payload).pipe(map((res: Supersmashbros) => new SupersmashbrosUpdated(res)))
    },
    onError: (action: UpdateSupersmashbros, error) => {
      console.error('Update Supersmashbros Effect', error)
    }
  })
    
  @Effect()
  deleteSupersmashbros$ = this.dataPersistence.pessimisticUpdate(SupersmashbrosActionTypes.DELETE_SUPERSMASHBROS, {
    run: (action: DeleteSupersmashbros, state: SupersmashbrosState) => {
      return of(action.payload).pipe(map((res: Supersmashbros) => new SupersmashbrosDeleted(action.payload)))
    },
    onError: (action: DeleteSupersmashbros, error) => {
      console.error('Delete Supersmashbros Effect', error)
    }
  })

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SupersmashbrosState>,
    private eightService: EightService
  ) {}
}