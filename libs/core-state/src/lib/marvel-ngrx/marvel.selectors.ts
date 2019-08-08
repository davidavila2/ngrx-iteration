import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromMarvel from './marvel.reducer';
import { emptyMarvel } from '@workspace/core-data';

export const selectMarvelState = createFeatureSelector<fromMarvel.MarvelState>('marvel');

export const selectMarvelId = createSelector(
  selectMarvelState,
  fromMarvel.selectMarvelIds
);

export const selectMarvelEntities = createSelector(
  selectMarvelState,
  fromMarvel.selectMarvelEntites
);

export const selectAllMarvel = createSelector(
  selectMarvelState,
  fromMarvel.selectAllMarvel
);

export const selectCurrentMarvelId = createSelector(
  selectMarvelState,
  fromMarvel.getSelectedMarvelId
);

export const selectCurrentMarvel = createSelector(
  selectMarvelEntities,
  selectCurrentMarvelId,
  (marvelEntities, marvelId) => {
    return marvelId ? marvelEntities[marvelId] : Object.assign({}, emptyMarvel)
  }
);

export const selectMarvelLoadingStatus = createSelector(
  selectMarvelState,
  state => state.isLoading
)