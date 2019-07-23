import { ActionReducerMap } from '@ngrx/store';

import * as fromIcons from './icons/icons.reducer';

export interface AppState {
  icons: fromIcons.IconsState;
}

export const reducers: ActionReducerMap<AppState> = {
  icons: fromIcons.IconsReducer
}