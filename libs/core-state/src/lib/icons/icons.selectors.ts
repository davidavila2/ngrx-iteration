import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromIcons from './icons.reducer';

export const selectIconsState = createFeatureSelector<fromIcons.IconsState>('icons');

export const selectAllIcons = createSelector(
  selectIconsState,
  fromIcons.selectAllIcons
)

export const selectIconsLoadingStatus = createSelector(
  selectIconsState,
  state => state.isLoading
)
