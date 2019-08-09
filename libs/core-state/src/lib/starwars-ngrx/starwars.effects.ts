import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { StarwarsState } from './starwars.reducer';
import { SomethingService, Something, ShowSomething } from '@workspace/core-data';
import { StarwarsActionTypes, LoadStarwars, StarwarsLoaded, AddStarwars, StarWarsAdded, UpdateStarwars, StarwarsUpdated, DeleteStarwars, StarwarsDeleted } from './starwars.actions';
import { of } from 'rxjs';


@Injectable()
export class StarwarsEffects {
  @Effect()
  loadStarwars$ = this.dataPersistence.fetch(StarwarsActionTypes.LOAD_STARWARS, {
    run: (action: LoadStarwars, state: StarwarsState) => {
      return this.somethingService.all().pipe(map((res: ShowSomething[]) => new StarwarsLoaded(res)))
    },
    onError: (action: LoadStarwars, error) => {
      console.error('Load Starwars Effect', error)
    }
  });

  @Effect()
  addStarwars$ = this.dataPersistence.pessimisticUpdate(StarwarsActionTypes.ADD_STARWARS, {
    run: (action: AddStarwars, state: StarwarsState) => {
      return this.somethingService.create(action.payload).pipe(map((res: ShowSomething) => new StarWarsAdded(res)))
    },
    onError: (action: AddStarwars, error) => {
      console.error('Add Starwars Effect', error)
    }
  });

  @Effect()
  updateStarwars$ = this.dataPersistence.pessimisticUpdate(StarwarsActionTypes.UPDATE_STARWARS, {
    run: (action: UpdateStarwars, state: StarwarsState) => {
      return this.somethingService.update(action.payload).pipe(map((res: ShowSomething) => new StarwarsUpdated(res)))
    },
    onError: (action: UpdateStarwars, error) => {
      console.error('Update Starwars Effect', error)
    }
  });

  @Effect()
  deleteStarwars$ = this.dataPersistence.pessimisticUpdate(StarwarsActionTypes.DELETE_STARWARS, {
    run: (action: DeleteStarwars, state: StarwarsState) => {
      return of(action.payload).pipe(map((res: ShowSomething) => new StarwarsDeleted(action.payload)))
    },
    onError: (action: DeleteStarwars, error) => {
      console.error('Delete Starwars Effect', error)
    }
    })




  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<StarwarsState>,
    private somethingService: SomethingService
  ) {}
}