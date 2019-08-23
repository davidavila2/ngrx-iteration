import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { HarrypotterActionTypes, LoadHarrypotter, HarrypotterLoaded, AddHarrypotter, HarrypotterAdded, UpdateHarrypotter, HarrypotterUpdated, DeleteHarrypotter, HarrypotterDeleted } from './harrypotter.actions';
import { HarrypotterState } from './harrypotter.reducer';
import { Nine, NineService } from '@workspace/core-data';
import { of } from 'rxjs';

@Injectable()
export class HarrypotterEffects {
  @Effect()
  loadHarrypotter$ = this.dataPersistence.fetch(HarrypotterActionTypes.LOAD_HARRYPOTTER, {
    run: (action: LoadHarrypotter, state: HarrypotterState) => {
      return this.nineService.all().pipe(map((res: Nine[]) => new HarrypotterLoaded(res)))
    },
    onError: (action: LoadHarrypotter, error) => {
      console.error('Load Harrypotter Effect', error)
    }
  });

  @Effect()
  addHarrypotter$ = this.dataPersistence.pessimisticUpdate(HarrypotterActionTypes.ADD_HARRYPOTTER, {
    run: (action: AddHarrypotter, state: HarrypotterState) => {
      return this.nineService.create(action.payload).pipe(map((res: Nine) => new HarrypotterAdded(res)))
    },
    onError: (action: AddHarrypotter, error) => {
      console.error('Add Harrypotter Effect', error)
    }
  })

  @Effect()
  updateHarrypotter$ = this.dataPersistence.pessimisticUpdate(HarrypotterActionTypes.UPDATE_HARRYPOTTER, {
    run: (action: UpdateHarrypotter, state: HarrypotterState) => {
      return of(action.payload).pipe(map((res: Nine) => new HarrypotterUpdated(res)))
    },
    onError: (action: UpdateHarrypotter, error) => {
      console.error('Update Harrypotter Effect', error)
    }
  })

  @Effect()
  deleteHarrypotter$ = this.dataPersistence.pessimisticUpdate(HarrypotterActionTypes.DELETE_HARRYPOTTER, {
    run: (action: DeleteHarrypotter, state: HarrypotterState) => {
      return of(action.payload).pipe(map((res: Nine) => new HarrypotterDeleted(action.payload)))
      // return this.nineService.delete(action.payload).pipe(map(_ => new HarrypotterDeleted(action.payload)))
    },
    onError: (action: DeleteHarrypotter, error) => {
      console.error('Delete Harrypotter Effect', error)
    }
  })

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<HarrypotterState>,
    private nineService: NineService
  ) { }
}