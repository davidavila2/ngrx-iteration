import { Action } from '@ngrx/store';
import { ShowSomething } from '@workspace/core-data';

export enum StarwarsActionTypes {
  STARWARS_ACTION = '[STARWARS] Starwars Actions',
  STARWARS_SELECTED = '[STARWARS] Starwars Selected',
  LOAD_STARWARS = '[STARWARS] Load Starwars',
  STARWARS_LOADED = '[STARWARS] Starwars Loaded',
  ADD_STARWARS = '[STARWARS] Add Starwars',
  STARWARS_ADDED = '[STARWARS] Starwars Added',
  UPDATE_STARWARS = '[STARWARS] Update Starwars',
  STARWARS_UPDATED = '[STARWARS] Starwars Updated',
  DELETE_STARWARS = '[STARWARS] Delete Starwars',
  STARWARS_DELETED = '[STARWARS] Starwars Deleted'
}

export class Starwars implements Action {
  readonly type = StarwarsActionTypes.STARWARS_ACTION;
}

export class StarwarsSelected implements Action {
  readonly type = StarwarsActionTypes.STARWARS_SELECTED;
  constructor(public payload) {}
}

export class LoadStarwars implements Action {
  readonly type = StarwarsActionTypes.LOAD_STARWARS;
  constructor() {}
}

export class StarwarsLoaded implements Action {
  readonly type = StarwarsActionTypes.STARWARS_LOADED;
  constructor(public payload: ShowSomething[]) {}
}

export class AddStarwars implements Action {
  readonly type = StarwarsActionTypes.ADD_STARWARS;
  constructor(public payload: ShowSomething) {}
}

export class StarWarsAdded implements Action {
  readonly type = StarwarsActionTypes.STARWARS_ADDED;
  constructor(public payload: ShowSomething) {}
}

export class UpdateStarwars implements Action {
  readonly type = StarwarsActionTypes.UPDATE_STARWARS;
  constructor(public payload: ShowSomething) {}
}

export class StarwarsUpdated implements Action {
  readonly type = StarwarsActionTypes.STARWARS_UPDATED;
  constructor(public payload: ShowSomething) {}
}

export class DeleteStarwars implements Action {
  readonly type = StarwarsActionTypes.DELETE_STARWARS;
  constructor(public payload: ShowSomething) {}
}

export class StarwarsDeleted implements Action {
  readonly type = StarwarsActionTypes.STARWARS_DELETED;
  constructor(public payload: ShowSomething) {}
}

export type StarwarsActions = Starwars
  | StarwarsSelected
  | LoadStarwars
  | StarwarsLoaded
  | AddStarwars
  | StarWarsAdded
  | UpdateStarwars
  | StarwarsUpdated
  | DeleteStarwars
  | StarwarsDeleted
  ;