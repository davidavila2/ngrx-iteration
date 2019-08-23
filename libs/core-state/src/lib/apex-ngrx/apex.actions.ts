import { Action } from '@ngrx/store';
import { Apexx } from '@workspace/core-data'

export enum ApexActionTypes {
  APEX_ACTION = '[APEX] Apex Actions',
  APEX_SELECTED = '[APEX] Apex Selected',
  LOAD_APEX = '[APEX] Load Apex',
  APEX_LOADED = '[APEX] Apex Loaded',
  ADD_APEX = '[APEX] Add Apex',
  APEX_ADDED = '[APEX] Apex Added',
  UPDATE_APEX = '[APEX] Update Apex',
  APEX_UPDATED = '[APEX] Apex Updated',
  DELETE_APEX = '[APEX] Delete Apex',
  APEX_DELETED = '[APEX] Apex Deleted'
}

export class Apex implements Action {
  readonly type = ApexActionTypes.APEX_ACTION
}

export class ApexSelected implements Action {
  readonly type = ApexActionTypes.APEX_SELECTED;
  constructor(public payload) {}
}

export class LoadApex implements Action {
  readonly type = ApexActionTypes.LOAD_APEX;
  constructor() {}
}

export class ApexLoaded implements Action {
  readonly type = ApexActionTypes.APEX_LOADED;
  constructor(public payload: Apexx[]) {}
}

export class AddApex implements Action {
  readonly type = ApexActionTypes.ADD_APEX;
  constructor(public payload: Apexx) {}
}

export class ApexAdded implements Action {
  readonly type = ApexActionTypes.APEX_ADDED;
  constructor(public payload: Apexx) {}
}

export class UpdateApex implements Action {
  readonly type = ApexActionTypes.UPDATE_APEX;
  constructor(public payload: Apexx) {}
}

export class ApexUpdated implements Action {
  readonly type = ApexActionTypes.APEX_UPDATED;
  constructor(public payload: Apexx) {}
}

export class DeleteApex implements Action {
  readonly type = ApexActionTypes.DELETE_APEX;
  constructor(public payload: Apexx) {}
}

export class ApexDeleted implements Action {
  readonly type = ApexActionTypes.APEX_DELETED;
  constructor(public payload: Apexx) {}
}

export type ApexActions = Apex
  | ApexSelected
  | LoadApex
  | ApexLoaded
  | AddApex
  | ApexAdded
  | UpdateApex
  | ApexUpdated
  | DeleteApex
  | ApexDeleted
  ;