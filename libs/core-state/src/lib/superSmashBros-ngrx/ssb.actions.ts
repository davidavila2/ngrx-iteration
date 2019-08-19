import { Action } from '@ngrx/store';
import { Supersmashbros } from '@workspace/core-data';

export enum SupersmashbrosActionTypes {
  SUPERSMASHBROS_ACTION = '[SUPERSMASHBROS] Supersmashbro Actions',
  SUPERSMASHBROS_SELECTED = '[SUPERSMASHBROS] Supersmashbros Selected',
  LOAD_SUPERSMASHBROS = '[SUPERSMASHBROS] Load Supersmashbros',
  SUPERSMASHBROS_LOADED = '[SUPERSMASHBROS] Supersmashbros Loaded',
  ADD_SUPERSMASHBROS = '[SUPERSMASHBROS] Add Supersmashbros',
  SUPERSMASHBROS_ADDED = '[SUPERSMASHBROS] Supersmashbros Added',
  UPDATE_SUPERSMASHBROS = '[SUPERSMASHBROS] Update Supersmashbros',
  SUPERSMASHBROS_UPDATED = '[SUPERSMASHBROS] Supersmashbros Updated',
  DELETE_SUPERSMASHBROS = '[SUPERSMASHBROS] Delete Supersmashbros',
  SUPERSMASHBROS_DELETED = '[SUPERSMASHBROS] Supersmashbros Deleted'
}

export class Supersmashbro implements Action {
  readonly type = SupersmashbrosActionTypes.SUPERSMASHBROS_ACTION;
}

export class SupersmashbrosSelected implements Action {
  readonly type = SupersmashbrosActionTypes.SUPERSMASHBROS_SELECTED;
  constructor(public payload) {}
}

export class LoadSupersmashbros implements Action {
  readonly type = SupersmashbrosActionTypes.LOAD_SUPERSMASHBROS;
  constructor() {}
}

export class SupersmashbrosLoaded implements Action {
  readonly type = SupersmashbrosActionTypes.SUPERSMASHBROS_LOADED;
  constructor(public payload: Supersmashbros[]) {}
}

export class AddSupersmashbros implements Action {
  readonly type = SupersmashbrosActionTypes.ADD_SUPERSMASHBROS;
  constructor(public payload: Supersmashbros) {}
}

export class SupersmashbrosAdded implements Action {
  readonly type = SupersmashbrosActionTypes.SUPERSMASHBROS_ADDED;
  constructor(public payload: Supersmashbros) {}
}

export class UpdateSupersmashbros implements Action {
  readonly type = SupersmashbrosActionTypes.UPDATE_SUPERSMASHBROS;
  constructor(public payload: Supersmashbros) {}
}

export class SupersmashbrosUpdated implements Action {
  readonly type = SupersmashbrosActionTypes.SUPERSMASHBROS_UPDATED;
  constructor(public payload: Supersmashbros) {}
}

export class DeleteSupersmashbros implements Action {
  readonly type = SupersmashbrosActionTypes.DELETE_SUPERSMASHBROS;
  constructor(public payload: Supersmashbros) {}
}

export class SupersmashbrosDeleted implements Action {
  readonly type = SupersmashbrosActionTypes.SUPERSMASHBROS_DELETED;
  constructor(public payload: Supersmashbros) {}
}

export type SupersmashbrosActions = Supersmashbro
  | SupersmashbrosSelected
  | LoadSupersmashbros
  | SupersmashbrosLoaded
  | AddSupersmashbros
  | SupersmashbrosAdded
  | UpdateSupersmashbros
  | SupersmashbrosUpdated
  | DeleteSupersmashbros
  | SupersmashbrosDeleted
  ;