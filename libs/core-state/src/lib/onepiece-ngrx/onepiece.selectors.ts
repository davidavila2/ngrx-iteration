import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromOnepiece from './onepiece.reducer';
import { emptyOnepiece } from '@workspace/core-data';

export const selectOnepieceState = createFeatureSelector<fromOnepiece.OnepieceState>('onepiece')

export const selectOnepieceId = createSelector(
  selectOnepieceState,
  fromOnepiece.selectOnepieceIds
)

export const selectOnepieceEntities = createSelector(
  selectOnepieceState,
  fromOnepiece.selectOnepieceEntities
)

export const selectAllOnepiece = createSelector(
  selectOnepieceState, 
  fromOnepiece.selectAllOnepiece
)

export const selectCurrentOnepieceId = createSelector(
  selectOnepieceState,
  fromOnepiece.getSelectedOnepieceId
)

export const selectCurrentOnepiece = createSelector(
  selectOnepieceEntities,
  selectCurrentOnepieceId,
  (onepieceEntities, onepieceId) => {
    return onepieceId ? onepieceEntities[onepieceId] : Object.assign({}, emptyOnepiece)
  }
);

export const selectOnepieceLoadingStatus = createSelector(
  selectOnepieceState,
  state => state.isLoading
)