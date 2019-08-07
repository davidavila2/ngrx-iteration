import { Action } from '@ngrx/store';
import { Amiibo } from '@workspace/core-data';


export enum AmiiboActionTypes {
  AMIIBO_ACTION = '[AMIIBO] Amiibo Actions',
  AMIIBO_SELECTED = '[AMIIBO] Amiibo Selected',
  LOAD_AMIIBO = '[AMIIBO] Load Amiibo',
  AMIIBO_LOADED = '[AMIIBO] Amiibo Loaded',
  ADD_AMIIBO = '[AMIIBO] Add Amiibo',
  AMIIBO_ADDED = '[AMIIBO] Amiibo Added',
  UPDATE_AMIIBO = '[AMIIBO] Update Amiibo',
  AMIIBO_UPDATED = '[AMIIBO] Amiibo Updated',
  DELETE_AMIIBO = '[AMIIBO] Delete Amiibo',
  AMIIBO_DELETED = '[AMIIBO] Amiibo Deleted'
}

export class Amiibos implements Action {
  readonly type = AmiiboActionTypes.AMIIBO_ACTION;
}

export class AmiiboSelected implements Action {
  readonly type = AmiiboActionTypes.AMIIBO_SELECTED;
  constructor(public payload) {}
}

export class LoadAmiibo implements Action {
  readonly type = AmiiboActionTypes.LOAD_AMIIBO;
  constructor() {}
}

export class AmiiboLoaded implements Action {
  readonly type = AmiiboActionTypes.AMIIBO_LOADED;
  constructor(public payload: Amiibo[]) {}
}

export class AddAmiibo implements Action {
  readonly type = AmiiboActionTypes.ADD_AMIIBO;
  constructor(public payload: Amiibo) {}
}

export class AmiiboAdded implements Action {
  readonly type = AmiiboActionTypes.AMIIBO_ADDED;
  constructor(public payload: Amiibo) {}
}

export class UpdateAmiibo implements Action {
  readonly type = AmiiboActionTypes.UPDATE_AMIIBO;
  constructor(public payload: Amiibo) {}
}

export class AmiiboUpdated implements Action {
  readonly type = AmiiboActionTypes.AMIIBO_UPDATED;
  constructor(public payload: Amiibo) {}
}

export class DeleteAmiibo implements Action {
  readonly type = AmiiboActionTypes.DELETE_AMIIBO;
  constructor(public payload: Amiibo) {}
}

export class AmiiboDeleted implements Action {
  readonly type = AmiiboActionTypes.AMIIBO_DELETED;
  constructor(public payload: Amiibo) {}
}

export type AmiiboActions = Amiibos
  | AmiiboSelected
  | LoadAmiibo
  | AmiiboLoaded
  | AddAmiibo
  | AmiiboAdded
  | UpdateAmiibo
  | AmiiboUpdated
  | DeleteAmiibo
  | AmiiboDeleted
  ;