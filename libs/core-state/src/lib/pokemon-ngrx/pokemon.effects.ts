import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { PokemonActionTypes, LoadPokemon, Pokemon, PokemonLoaded, AddPokemon, PokemonAdded, UpdatePokemon, PokemonUpdated, PokemonDeleted, DeletePokemon } from './pokemon.actions';
import { PokemonState } from './pokemon.reducer';
import { PokemonService, PokeDetails } from '@workspace/core-data';


@Injectable()
export class PokemonEffects {
  @Effect()
  loadPokemon$ = this.dataPersistence.fetch(PokemonActionTypes.LOAD_POKEMON, {
    run: (action: LoadPokemon, state: PokemonState) => {
      return this.pokemonService.all().pipe(map((res: PokeDetails[]) => new PokemonLoaded(res)))
    },
    onError: (action: LoadPokemon, error) => {
      console.error('Load Pokemon Effect', error)
    }
  });

  @Effect()
  addPokemon$ = this.dataPersistence.pessimisticUpdate(PokemonActionTypes.ADD_POKEMON, {
    run: (action: AddPokemon, state: PokemonState) => {
      return this.pokemonService.create(action.payload).pipe(map((res: PokeDetails) => new PokemonAdded(res)))
    },
    onError: (action: AddPokemon, error) => {
      console.error('Add Pokemon Effect', error)
    }
  });
    
  @Effect()
  updatePokemon$ = this.dataPersistence.pessimisticUpdate(PokemonActionTypes.UPDATE_POKEMON, {
    run: (action: UpdatePokemon, state: PokemonState) => {
      return this.pokemonService.update(action.payload).pipe(map((res: PokeDetails) => new PokemonUpdated(res)))
    },
    onError: (action: UpdatePokemon, error) => {
      console.error('Update Pokemon Effect', error)
    }
  });
    
  @Effect()
    deletePokemon$ = this.dataPersistence.pessimisticUpdate(PokemonActionTypes.DELETE_POKEMON, {
      run: (action: DeletePokemon, state: PokemonState) => {
        return this.pokemonService.delete(action.payload.id).pipe(map((res: PokeDetails) => new PokemonDeleted(action.payload)))
      },
      onError: (action: DeletePokemon, error) => {
        console.error('Delete Pokemon Effect', error)
      }
    })

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PokemonState>,
    private pokemonService: PokemonService
  ) {}
}