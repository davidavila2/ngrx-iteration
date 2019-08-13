import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { OnepieceState } from './onepiece.reducer';
import { OnepieceService, Onepiece } from '@workspace/core-data';
import { OnepieceActionTypes, LoadOnepiece, OnePieceLoaded, AddOnepiece, OnepieceAdded, UpdateOnepiece, OnepieceUpdated, DeleteOnepiece, OnepieceDeleted } from './onepiece.actions';
import { of } from 'rxjs';

@Injectable() 
export class OnepieceEffects {
  @Effect()
  loadOnepiece$ = this.dataPersistence.fetch(OnepieceActionTypes.LOAD_ONEPIECE, {
    run: (action: LoadOnepiece, state: OnepieceState) => {
      return this.onepieceService.all().pipe(map((res: Onepiece[]) => new OnePieceLoaded(res)))
    },
    onError: (action: LoadOnepiece, error) => {
      console.error('Load Onepiece Effect', error)
    }
  })
    
  @Effect()
  addOnepiece$ = this.dataPersistence.pessimisticUpdate(OnepieceActionTypes.ADD_ONEPIECE, {
    run: (action: AddOnepiece, state: OnepieceState) => {
      return of(action.payload).pipe(map((res: Onepiece) => new OnepieceAdded(res)))
    },
    onError: (action: AddOnepiece, error) => {
      console.error('Add Onepiece Effect', error)
    }
  })
    
  @Effect()
  updateOnepiece = this.dataPersistence.pessimisticUpdate(OnepieceActionTypes.UPDATE_ONEPIECE, {
    run: (action: UpdateOnepiece, state: OnepieceState) => {
      return of(action.payload).pipe(map((res: Onepiece) => new OnepieceUpdated(res)))
    },
    onError: (action: UpdateOnepiece, error) => {
      console.error('Delete Onepiece Effect', error)
    }
  })
    
  @Effect()
  deleteOnepiece$ = this.dataPersistence.pessimisticUpdate(OnepieceActionTypes.DELETE_ONEPIECE, {
    run: (action: DeleteOnepiece, state: OnepieceState) => {
      return of(action.payload).pipe(map((res: Onepiece) => new OnepieceDeleted(action.payload)))
    },
    onError: (action: DeleteOnepiece, error) => {
      console.error('Delete Onepiece Effect', error)
    }
  })

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<OnepieceState>,
    private onepieceService: OnepieceService
  ) {}
}