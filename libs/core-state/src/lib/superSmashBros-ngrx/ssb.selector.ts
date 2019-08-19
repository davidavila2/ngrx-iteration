import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSupersmashbros from './ssb.reducer';
import { emptySupersmashbro } from '@workspace/core-data';

export const selectSupersmashbrosState = createFeatureSelector<fromSupersmashbros.SupersmashbrosState>('supersmashbros');
export const selectSupersmashbroId = createSelector(
  selectSupersmashbrosState,
  fromSupersmashbros.selectSupersmashbrosIds
);

export const selectSupersmashbrosEntities = createSelector(
  selectSupersmashbrosState,
  fromSupersmashbros.selectSupersmashbrosEntities
);

export const selectAllSupersmashbros = createSelector(
  selectSupersmashbrosState,
  fromSupersmashbros.selectAllSupersmashbros
);

export const selectCurrentSupersmashbrosId = createSelector(
  selectSupersmashbrosState,
  fromSupersmashbros.getSelectedSupersmashbrosId
);

export const selectCurrentSupersmashbro = createSelector(
  selectSupersmashbrosEntities,
  selectCurrentSupersmashbrosId,
  (supersmashbroEntities, supersmashbroId) => {
    return supersmashbroId ? supersmashbroEntities[supersmashbroId] : Object.assign({}, emptySupersmashbro)
  }
);

export const selectSupersmashbroLoadingStatus = createSelector(
  selectSupersmashbrosState,
  state => state.isLoading
)