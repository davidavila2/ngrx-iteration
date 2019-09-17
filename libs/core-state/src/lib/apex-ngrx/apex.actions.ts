import { Action } from '@ngrx/store';
import { Apex } from '@workspace/core-data'

export enum ApexActionTypes {
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
  constructor(public payload: Apex[]) {}
}

export class AddApex implements Action {
  readonly type = ApexActionTypes.ADD_APEX;
  constructor(public payload: Apex) {}
}

export class ApexAdded implements Action {
  readonly type = ApexActionTypes.APEX_ADDED;
  constructor(public payload: Apex) {}
}

export class UpdateApex implements Action {
  readonly type = ApexActionTypes.UPDATE_APEX;
  constructor(public payload: Apex) {}
}

export class ApexUpdated implements Action {
  readonly type = ApexActionTypes.APEX_UPDATED;
  constructor(public payload: Apex) {}
}

export class DeleteApex implements Action {
  readonly type = ApexActionTypes.DELETE_APEX;
  constructor(public payload: Apex) {}
}

export class ApexDeleted implements Action {
  readonly type = ApexActionTypes.APEX_DELETED;
  constructor(public payload: Apex) {}
}

export type ApexActions = ApexSelected
  | LoadApex
  | ApexLoaded
  | AddApex
  | ApexAdded
  | UpdateApex
  | ApexUpdated
  | DeleteApex
  | ApexDeleted
  ;