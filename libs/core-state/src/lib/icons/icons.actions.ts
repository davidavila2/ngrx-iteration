import { Action } from '@ngrx/store';
import { Icons } from '@workspace/core-data';

export enum IconActionTypes {
  ICON_ACTION = '[ICON] Icon Actions',
  LOAD_ICONS = '[ICON] Load Icons',
  ICONS_LOADED = '[ICON] Icons Loaded'
}

export class Icon implements Action {
  readonly type = IconActionTypes.ICON_ACTION;
}

export class LoadIcons implements Action {
  readonly type = IconActionTypes.LOAD_ICONS;
  constructor() {}
}

export class IconsLoaded implements Action {
  readonly type = IconActionTypes.ICONS_LOADED;
  constructor(public payload: Icons[]) {}
}

export type IconActions = Icon
  | LoadIcons
  | IconsLoaded
  ;