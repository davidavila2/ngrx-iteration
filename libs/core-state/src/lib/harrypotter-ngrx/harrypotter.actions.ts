import { Action } from '@ngrx/store';
import { Nine } from '@workspace/core-data';

export enum HarrypotterActionTypes {
  HARRYPOTTER_ACTION = '[HARRYPOTTER] Harrypotter Actions',
  HARRYPOTTER_SELECTED = '[HARRYPOTTER] Harrypotter Selected',
  LOAD_HARRYPOTTER = '[HARRYPOTTER] Load Harrypotter',
  HARRYPOTTER_LOADED = '[HARRYPOTTER] Harrypotter Loaded',
  ADD_HARRYPOTTER = '[HARRYPOTTER] Add Harrypotter',
  HARRYPOTTER_ADDED = '[HARRYPOTTER] Harrypotter Added',
  UPDATE_HARRYPOTTER = '[HARRYPOTTER] Update Harrypotter',
  HARRYPOTTER_UPDATED = '[HARRYPOTTER] Harrypotter Updated',
  DELETE_HARRYPOTTER = '[HARRYPOTTER] Delete Harrypotter',
  HARRYPOTTER_DELETED = '[HARRYPOTTER] Harrypotter Deleted'
}

export class Harrypotter implements Action {
  readonly type = HarrypotterActionTypes.HARRYPOTTER_ACTION
}

export class HarrypotterSelected implements Action {
  readonly type = HarrypotterActionTypes.HARRYPOTTER_SELECTED
  constructor(public payload) {}
}

export class LoadHarrypotter implements Action {
  readonly type = HarrypotterActionTypes.LOAD_HARRYPOTTER
  constructor() {}
}

export class HarrypotterLoaded implements Action {
  readonly type = HarrypotterActionTypes.HARRYPOTTER_LOADED
  constructor(public payload: Nine[]) {}
}

export class AddHarrypotter implements Action {
  readonly type = HarrypotterActionTypes.ADD_HARRYPOTTER
  constructor(public payload: Nine) {}
}

export class HarrypotterAdded implements Action {
  readonly type = HarrypotterActionTypes.HARRYPOTTER_ADDED
  constructor(public payload: Nine) {}
}

export class UpdateHarrypotter implements Action {
  readonly type = HarrypotterActionTypes.UPDATE_HARRYPOTTER
  constructor(public payload: Nine) {}
}

export class HarrypotterUpdated implements Action {
  readonly type = HarrypotterActionTypes.HARRYPOTTER_UPDATED
  constructor(public payload: Nine) {}
}

export class DeleteHarrypotter implements Action {
  readonly type = HarrypotterActionTypes.DELETE_HARRYPOTTER
  constructor(public payload: Nine) {}
}

export class HarrypotterDeleted implements Action {
  readonly type = HarrypotterActionTypes.HARRYPOTTER_DELETED
  constructor(public payload: Nine) {}
}

export type HarrypotterActions = Harrypotter
  | HarrypotterSelected
  | LoadHarrypotter
  | HarrypotterLoaded
  | AddHarrypotter
  | HarrypotterAdded
  | UpdateHarrypotter
  | HarrypotterUpdated
  | DeleteHarrypotter
  | HarrypotterDeleted
  ;