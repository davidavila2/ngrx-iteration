import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApex from './apex.reducer';
import { emptyApex } from '@workspace/core-data'

export const selectApexState = createFeatureSelector<fromApex.ApexState>('apex');

export const selectApexId = createSelector(
  selectApexState,
  fromApex.selectApexIds
)

export const selectApexEntities = createSelector(
  selectApexState,
  fromApex.selectApexEntities
)

export const selectAllApex = createSelector(
  selectApexState,
  fromApex.selectAllApex
)

export const selectCurrentApexId = createSelector(
  selectApexState,
  fromApex.getSelectedApexId
)

export const selectCurrentApex = createSelector(
  selectApexEntities,
  selectCurrentApexId,
  (apexEntities, apexId) => {
    return apexId ? apexEntities[apexId] : Object.assign({}, emptyApex)
  }
)

export const selectApexLoadingStatus = createSelector(
  selectApexState,
  state => state.isLoading
)