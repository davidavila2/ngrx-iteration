import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PokeResource, PokeDetails } from '@workspace/core-data';
import { PokemonActions, PokemonActionTypes } from './pokemon.actions';

export interface PokemonState extends EntityState<PokeDetails> {
  selectedPokemonId: string | null;
  isLoading: boolean;
}

export const adapter: EntityAdapter<PokeDetails> = createEntityAdapter<PokeDetails>();
export const initialState: PokemonState = adapter.getInitialState({
  selectedPokemonId: null,
  isLoading: false
})

export function PokemonReducer(state = initialState, action: PokemonActions) {
  switch (action.type) {
    case PokemonActionTypes.POKEMON_SELECTED: {
      return Object.assign({}, state, { selectedPokemonId: action.payload })
    }
    case PokemonActionTypes.LOAD_POKEMON: {
      return {
        ...state,
        isLoading: true
      }
    }
    case PokemonActionTypes.POKEMON_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case PokemonActionTypes.ADD_POKEMON: {
      return {
        ...state,
        isLoading: true
      }
    }
    case PokemonActionTypes.POKEMON_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case PokemonActionTypes.UPDATE_POKEMON: {
      return {
        ...state,
        isLoading: true
      }
    }
    case PokemonActionTypes.POKEMON_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case PokemonActionTypes.DELETE_POKEMON: {
      return {
        ...state,
        isLoading: true
      }
    }
    case PokemonActionTypes.POKEMON_DELETED: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state;
  }
}

export const getSelectedPokemonId = (state: PokemonState) => state.selectedPokemonId;
export const {
  selectIds: selectPokemonIds,
  selectEntities: selectPokemonEntities,
  selectAll: selectAllPokemon,
  selectTotal: selectPokemonTotal
} = adapter.getSelectors()