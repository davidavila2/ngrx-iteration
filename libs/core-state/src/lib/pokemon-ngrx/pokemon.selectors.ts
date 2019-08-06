import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPokemon from './pokemon.reducer';
import { emptyPokemon } from '@workspace/core-data';

export const selectPokemonState = createFeatureSelector<fromPokemon.PokemonState>('pokemon');

export const selectPokemonId = createSelector(
  selectPokemonState,
  fromPokemon.selectPokemonIds
);

export const selectPokemonEntities = createSelector(
  selectPokemonState,
  fromPokemon.selectPokemonEntities
);

export const selectAllPokemon = createSelector(
  selectPokemonState,
  fromPokemon.selectAllPokemon
);

export const selectCurrentPokemonId = createSelector(
  selectPokemonState,
  fromPokemon.getSelectedPokemonId
);

export const selectCurrentPokemon = createSelector(
  selectPokemonEntities,
  selectCurrentPokemonId,
  (pokemonEntites, pokemonId) => {
    return pokemonId ? pokemonEntites[pokemonId] : Object.assign({}, emptyPokemon)
  }
);

export const selectPokemonLoadingStatus = createSelector(
  selectPokemonState,
  state => state.isLoading
)