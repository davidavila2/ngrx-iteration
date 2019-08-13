import { Action } from '@ngrx/store';
import { Onepiece } from '@workspace/core-data'

export enum OnepieceActionTypes {
  ONEPIECE_ACTION = '[ONEPIECE] Onepiece Action',
  ONEPIECE_SELECTED = '[ONEPIECE] Onepiece Selected',
  LOAD_ONEPIECE = '[ONEPIECE] Load Onepiece',
  ONEPIECE_LOADED = '[ONEPIECE] Onepiece Loaded',
  ADD_ONEPIECE = '[ONEPIECE] Add Onepiece',
  ONEPIECE_ADDED = '[ONEPIECE] Onepiece Added',
  UPDATE_ONEPIECE = '[ONEPIECE] Update Onepiece',
  ONEPIECE_UPDATED = '[ONEPIECE] Onepiece Updated',
  DELETE_ONEPIECE = '[ONEPIECE] Delete Onepiece',
  ONEPIECE_DELETED = '[ONEPIECE] Onepiece Deleted'
}

export class Onepice implements Action {
  readonly type = OnepieceActionTypes.ONEPIECE_ACTION
}

export class OnepieceSelected implements Action {
  readonly type = OnepieceActionTypes.ONEPIECE_SELECTED;
  constructor(public payload) {}
}

export class LoadOnepiece implements Action {
  readonly type = OnepieceActionTypes.LOAD_ONEPIECE;
  constructor() {}
}

export class OnePieceLoaded implements Action {
  readonly type = OnepieceActionTypes.ONEPIECE_LOADED;
  constructor(public payload: Onepiece[]) {}
}

export class AddOnepiece implements Action {
  readonly type = OnepieceActionTypes.ADD_ONEPIECE;
  constructor(public payload: Onepiece) {}
}

export class OnepieceAdded implements Action {
  readonly type = OnepieceActionTypes.ONEPIECE_ADDED;
  constructor(public payload: Onepiece) {}
}

export class UpdateOnepiece implements Action {
  readonly type = OnepieceActionTypes.UPDATE_ONEPIECE;
  constructor(public payload: Onepiece) {}
}

export class OnepieceUpdated implements Action {
  readonly type = OnepieceActionTypes.ONEPIECE_UPDATED;
  constructor(public payload: Onepiece) {}
}

export class DeleteOnepiece implements Action {
  readonly type = OnepieceActionTypes.DELETE_ONEPIECE;
  constructor(public payload: Onepiece) {}
}

export class OnepieceDeleted implements Action {
  readonly type = OnepieceActionTypes.ONEPIECE_DELETED;
  constructor(public payload: Onepiece) {}
}

export type OnepieceActions = Onepice
  | OnepieceSelected
  | LoadOnepiece
  | OnePieceLoaded
  | AddOnepiece
  | OnepieceAdded
  | UpdateOnepiece
  | OnepieceUpdated
  | DeleteOnepiece
  | OnepieceDeleted
  ;