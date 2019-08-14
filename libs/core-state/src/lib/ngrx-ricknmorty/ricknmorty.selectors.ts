import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRick from './ricknmorty.reducer';
import { emptyRicknmortyDetails } from '@workspace/core-data';

export const selectRickState = createFeatureSelector<fromRick.RickState>('rick');

export const selectRickId = createSelector(
  selectRickState,
  fromRick.selectRickIds
);

export const selectRickEntities = createSelector(
  selectRickState,
  fromRick.selectRickEntities
);

export const selectAllRicks = createSelector(
  selectRickState,
  fromRick.selectAllRicks
)

export const selectCurrentRickId = createSelector(
  selectRickState,
  fromRick.getSelectedRickId
)

export const selectCurrentRick = createSelector(
  selectRickEntities,
  selectCurrentRickId,
  (rickEntities, rickId) => {
    return rickId ? rickEntities[rickId] : Object.assign({}, emptyRicknmortyDetails)
  }
)

export const selectRickLoadingStatus = createSelector(
  selectRickState,
  state => state.isLoading
)