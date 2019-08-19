import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Supersmashbros } from '@workspace/core-data';
import { SupersmashbrosActionTypes, SupersmashbrosActions } from './ssb.actions';

export interface SupersmashbrosState extends EntityState<Supersmashbros> {
  selectedSupersmashbroId: number | 0;
  isLoading: boolean
}

export const adapter: EntityAdapter<Supersmashbros> = createEntityAdapter<Supersmashbros>({selectId: supersmashbros => supersmashbros.OwnerId});
export const initialState: SupersmashbrosState = adapter.getInitialState({
  selectedSupersmashbroId: null,
  isLoading: false
})

export function SupersmashbrosReducer(state = initialState, action: SupersmashbrosActions) {
  switch (action.type) {
    case SupersmashbrosActionTypes.SUPERSMASHBROS_SELECTED: {
      return Object.assign({}, state, { selectedSupersmashbroId: action.payload })
    }
    case SupersmashbrosActionTypes.LOAD_SUPERSMASHBROS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SupersmashbrosActionTypes.SUPERSMASHBROS_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case SupersmashbrosActionTypes.ADD_SUPERSMASHBROS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SupersmashbrosActionTypes.SUPERSMASHBROS_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case SupersmashbrosActionTypes.UPDATE_SUPERSMASHBROS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SupersmashbrosActionTypes.SUPERSMASHBROS_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case SupersmashbrosActionTypes.DELETE_SUPERSMASHBROS: {
        return {
          ...state,
          isLoading: true
        }
    }
    case SupersmashbrosActionTypes.SUPERSMASHBROS_DELETED: {
      return adapter.removeOne(action.payload.OwnerId, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state
  }
}

export const getSelectedSupersmashbrosId = (state: SupersmashbrosState) => state.selectedSupersmashbroId;
export const {
  selectIds: selectSupersmashbrosIds,
  selectEntities: selectSupersmashbrosEntities,
  selectAll: selectAllSupersmashbros,
  selectTotal: selectSupersmashbrosTotal
} = adapter.getSelectors()                                                                                                                                                                                                                                                                                                                                    