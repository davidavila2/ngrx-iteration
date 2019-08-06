import { Injectable } from "@angular/core";
import { Store, ActionsSubject, select } from '@ngrx/store';
import { selectCurrentPokemon, selectAllPokemon, selectPokemonLoadingStatus } from './pokemon.selectors';
import { PokemonActionTypes} from './pokemon.actions';
import * as PokemonActions from './pokemon.actions'
import { PokemonState } from './pokemon.reducer';
import { filter } from 'rxjs/operators';
import { PokeDetails } from '@workspace/core-data';



@Injectable({ providedIn: 'root' })
export class PokemonFacade {
  pokemon$ = this.store.pipe(select(selectAllPokemon));
  currentPokemon$ = this.store.pipe(select(selectCurrentPokemon));
  isPokemonLoading$ = this.store.pipe(select(selectPokemonLoadingStatus));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === PokemonActionTypes.ADD_POKEMON
        || action.type === PokemonActionTypes.UPDATE_POKEMON
        || action.type === PokemonActionTypes.DELETE_POKEMON)
  )
  
  constructor(private store: Store<PokemonState>, private actions$: ActionsSubject) { }
  
  selectPokemon(pokemonId: string) {
    this.store.dispatch(new PokemonActions.PokemonSelected(pokemonId))
  }

  loadPokemon() {
    this.store.dispatch(new PokemonActions.LoadPokemon())
  }

  createPokemon(pokemon: PokeDetails) {
    this.store.dispatch(new PokemonActions.AddPokemon(pokemon))
  }

  updatePokemon(pokemon: PokeDetails) {
    this.store.dispatch(new PokemonActions.UpdatePokemon(pokemon))
  }

  deletePokemon(pokemon: PokeDetails) {
    this.store.dispatch(new PokemonActions.DeletePokemon(pokemon))
  }

}