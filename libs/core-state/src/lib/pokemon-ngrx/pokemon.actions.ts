import { Action } from '@ngrx/store';
import { PokeResource, PokeDetails } from '@workspace/core-data';

export enum PokemonActionTypes {
  POKEMON_ACTION = '[POKEMON] Pokemon Actions',
  POKEMON_SELECTED = '[POKEMON] Pokemon Selected',
  LOAD_POKEMON = '[POKEMON] Load Pokemon',
  POKEMON_LOADED = '[POKEMON] Pokemon Loaded',
  ADD_POKEMON = '[POKEMON] Add Pokemon',
  POKEMON_ADDED = '[POKEMON] Pokemon Added',
  UPDATE_POKEMON = '[POKEMON] Update Pokemon',
  POKEMON_UPDATED = '[POKEMON] Pokemon Updated',
  DELETE_POKEMON = '[POKEMON] Delete Pokemon',
  POKEMON_DELETED = '[POKEMON] Pokemon Deleted'
}

export class Pokemon implements Action {
  readonly type = PokemonActionTypes.POKEMON_ACTION;
}

export class PokemonSelected implements Action {
  readonly type = PokemonActionTypes.POKEMON_SELECTED;
  constructor(public payload) {}
}

export class LoadPokemon implements Action {
  readonly type = PokemonActionTypes.LOAD_POKEMON;
  constructor() {}
}

export class PokemonLoaded implements Action {
  readonly type = PokemonActionTypes.POKEMON_LOADED;
  constructor(public payload: PokeDetails[]) {}
}

export class AddPokemon implements Action {
  readonly type = PokemonActionTypes.ADD_POKEMON;
  constructor(public payload: PokeDetails) {}
}

export class PokemonAdded implements Action {
  readonly type = PokemonActionTypes.POKEMON_ADDED;
  constructor(public payload: PokeDetails) { }
}

export class UpdatePokemon implements Action {
  readonly type = PokemonActionTypes.UPDATE_POKEMON;
  constructor(public payload: PokeDetails) {}
}

export class PokemonUpdated implements Action {
  readonly type = PokemonActionTypes.POKEMON_UPDATED;
  constructor(public payload: PokeDetails) {}
}

export class DeletePokemon implements Action {
  readonly type = PokemonActionTypes.DELETE_POKEMON;
  constructor(public payload: PokeDetails) {}
}

export class PokemonDeleted implements Action {
  readonly type = PokemonActionTypes.POKEMON_DELETED;
  constructor(public payload: PokeDetails) {}
}

export type PokemonActions = Pokemon
  | PokemonSelected
  | LoadPokemon
  | PokemonLoaded
  | AddPokemon
  | PokemonAdded
  | UpdatePokemon
  | PokemonUpdated
  | DeletePokemon
  | PokemonDeleted
  ;