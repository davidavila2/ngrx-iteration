import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromHarrypotter from './harrypotter.reducer';
import { emptyHarrypotter } from '@workspace/core-data';

export const selectHarrypotterState = createFeatureSelector<fromHarrypotter.HarrypotterState>('harrypotter');

export const selectHarrypotterId = createSelector(
  selectHarrypotterState,
  fromHarrypotter.selectHarrypotterIds
)

export const selectHarrypotterEntities = createSelector(
  selectHarrypotterState,
  fromHarrypotter.selectHarrypotterEntities
)

export const selectAllHarrypotter = createSelector(
  selectHarrypotterState,
  fromHarrypotter.selectAllHarrypotter
)

export const selectCurrentHarrypotterId = createSelector(
  selectHarrypotterState,
  fromHarrypotter.getSelectedHarrypotterId
)

export const selectCurrentHarrypotter = createSelector(
  selectHarrypotterEntities,
  selectCurrentHarrypotterId,
  (harrypotterEntities, harrypotterId) => {
    return harrypotterId ? harrypotterEntities[harrypotterId] : Object.assign({}, emptyHarrypotter)
  }
);

export const selectHarrypotterLoadingStatus = createSelector(
  selectHarrypotterState,
  state => state.isLoading
)