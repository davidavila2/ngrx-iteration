import { Action } from '@ngrx/store';
import { MarvelCharacters } from '@workspace/core-data'

export enum MarvelActionsTypes {
  MARVEL_ACTION = '[MARVEL] Marvel Actions',
  MARVEL_SELECTED = '[MARVEL] Marvel Selected',
  LOAD_MARVEL = '[MARVEL] Load Marvel',
  MARVEL_LOADED = '[MARVEL] Marvel Loaded',
  ADD_MARVEL = '[MARVEL] Add Marvel',
  MARVEL_ADDED = '[MARVEL] Marvel Added',
  UPDATE_MARVEL = '[MARVEL] Update Marvel',
  MARVEL_UPDATED = '[MARVEL] Marvel Updated',
  DELETE_MARVEL = '[MARVEL] Delete Marvel',
  MARVEL_DELETED = '[MARVEL] Marvel Deleted'
}

export class Marvel implements Action {
  readonly type = MarvelActionsTypes.MARVEL_ACTION
}

export class MarvelSelected implements Action {
  readonly type = MarvelActionsTypes.MARVEL_SELECTED;
  constructor(public payload) {}
}

export class LoadMarvel implements Action {
  readonly type = MarvelActionsTypes.LOAD_MARVEL;
  constructor() {}
}

export class MarvelLoaded implements Action {
  readonly type = MarvelActionsTypes.MARVEL_LOADED;
  constructor(public payload: MarvelCharacters[]) {}
}

export class AddMarvel implements Action {
  readonly type = MarvelActionsTypes.ADD_MARVEL;
  constructor(public payload: MarvelCharacters) {}
}

export class MarvelAdded implements Action {
  readonly type = MarvelActionsTypes.MARVEL_ADDED;
  constructor(public payload: MarvelCharacters) {}
}

export class UpdateMarvel implements Action {
  readonly type = MarvelActionsTypes.UPDATE_MARVEL;
  constructor(public payload: MarvelCharacters) {}
}

export class MarvelUpdated implements Action {
  readonly type = MarvelActionsTypes.MARVEL_UPDATED;
  constructor(public payload: MarvelCharacters) {}
}

export class DeleteMarvel implements Action {
  readonly type = MarvelActionsTypes.DELETE_MARVEL;
  constructor(public payload: MarvelCharacters) {}
}

export class MarvelDeleted implements Action {
  readonly type = MarvelActionsTypes.MARVEL_DELETED;
  constructor(public payload: MarvelCharacters) {}
}

export type MarvelActions = Marvel
  | MarvelSelected
  | LoadMarvel
  | MarvelLoaded
  | AddMarvel
  | MarvelAdded
  | UpdateMarvel
  | MarvelUpdated
  | DeleteMarvel
  | MarvelDeleted
  ;