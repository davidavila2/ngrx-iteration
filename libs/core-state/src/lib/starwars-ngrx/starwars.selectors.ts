import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStarwars from './starwars.reducer';
import { emptyStarwars } from '@workspace/core-data';

export const selectStarwarsState = createFeatureSelector<fromStarwars.StarwarsState>('starwars');

export const selectStarwarsId = createSelector(
  selectStarwarsState,
  fromStarwars.selectStarwarsIds
);

export const selectStarwarsEntities = createSelector(
  selectStarwarsState,
  fromStarwars.selectStarwarsEntities
)

export const selectAllStarwars = createSelector(
  selectStarwarsState,
  fromStarwars.selectAllStarwars
)

export const selectCurrentStarwarsId = createSelector(
  selectStarwarsState,
  fromStarwars.getSelectedStarwarsId
)

export const selectCurrentStarwars = createSelector(
  selectStarwarsEntities,
  selectCurrentStarwarsId,
  (starwarsEntities, starwarsId) => {
    return starwarsId ? starwarsEntities[starwarsId] : Object.assign({}, emptyStarwars)
  }
);

export const selectStarwarsLoadingStatus = createSelector(
  selectStarwarsState,
  state => state.isLoading
)