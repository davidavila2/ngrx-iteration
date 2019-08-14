import { Action } from '@ngrx/store';
import { RicknmortyDetails } from '@workspace/core-data';

export enum RickActionTypes {
  RICK_ACTION = '[RICK] Rick Actions',
  RICK_SELECTED = '[RICK] Rick Selected',
  LOAD_RICK = '[RICK] Load Rick',
  RICK_LOADED = '[RICK] Rick Loaded',
  ADD_RICK = '[RICK] Add Rick',
  RICK_ADDED = '[RICK] Rick Added',
  UPDATE_RICK = '[RICK] Update Rick',
  RICK_UPDATED = '[RICK] Rick Updated',
  DELETE_RICK = '[RICK] Delete Rick',
  RICK_DELETED = '[RICK] Rick Deleted'
}

export class Rick implements Action {
  readonly type = RickActionTypes.RICK_ACTION;
}

export class RickSelected implements Action {
  readonly type = RickActionTypes.RICK_SELECTED;
  constructor(public payload) {}
}

export class LoadRick implements Action {
  readonly type = RickActionTypes.LOAD_RICK;
  constructor() {}
}

export class RickLoaded implements Action {
  readonly type = RickActionTypes.RICK_LOADED;
  constructor(public payload: RicknmortyDetails[]) {}
}

export class AddRick implements Action {
  readonly type = RickActionTypes.ADD_RICK;
  constructor(public payload: RicknmortyDetails) {}
}

export class RickAdded implements Action {
  readonly type = RickActionTypes.RICK_ADDED;
  constructor(public payload: RicknmortyDetails) {}
}

export class UpdateRick implements Action {
  readonly type = RickActionTypes.UPDATE_RICK;
  constructor(public payload: RicknmortyDetails) {}
}

export class RickUpdated implements Action {
  readonly type = RickActionTypes.RICK_UPDATED;
  constructor(public payload: RicknmortyDetails) {}
}

export class DeleteRick implements Action {
  readonly type = RickActionTypes.DELETE_RICK;
  constructor(public payload: RicknmortyDetails) {}
}

export class RickDeleted implements Action {
  readonly type = RickActionTypes.RICK_DELETED;
  constructor(public payload: RicknmortyDetails) {}
}

export type RickActions = Rick
  | RickSelected
  | LoadRick
  | RickLoaded
  | AddRick
  | RickAdded
  | UpdateRick
  | RickUpdated
  | DeleteRick
  | RickDeleted
  ;