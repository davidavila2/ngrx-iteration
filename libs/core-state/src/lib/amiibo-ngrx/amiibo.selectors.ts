import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAmiibo from './amiibo.reducer';
import { emptyAmiibo } from '@workspace/core-data';

export const selectAmiiboState = createFeatureSelector<fromAmiibo.AmiiboState>('amiibo');

export const selectAmiiboId = createSelector(
  selectAmiiboState,
  fromAmiibo.selectAmiiboIds
);

export const selectAmiiboEntities = createSelector(
  selectAmiiboState,
  fromAmiibo.selectAmiiboEntities
);

export const selectAllAmiibos = createSelector(
  selectAmiiboState,
  fromAmiibo.selectAllAmiibo
);

export const selectCurrentAmiiboId = createSelector(
  selectAmiiboState,
  fromAmiibo.getSelectedAmiiboId
);

export const selectCurrentAmiibo = createSelector(
  selectAmiiboEntities,
  selectCurrentAmiiboId,
  (amiiboEntites, amiiboId) => {
    return amiiboId ? amiiboEntites[amiiboId] : Object.assign({}, emptyAmiibo)
  }
);

export const selectAmiiboLoadingStatus = createSelector(
  selectAmiiboState,
  state => state.isLoading
)