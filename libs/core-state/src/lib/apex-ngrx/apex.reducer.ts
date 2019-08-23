import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Apexx } from '@workspace/core-data';
import { ApexActions, ApexActionTypes } from './apex.actions';


export interface ApexState extends EntityState<Apexx> {
  selectedApexId: string | null;
  isLoading: boolean
}

export const adapter: EntityAdapter<Apexx> = createEntityAdapter<Apexx>();
export const initialState: ApexState = adapter.getInitialState({
  selectedApexId: null,
  isLoading: false
})

export function ApexReducer(state = initialState, action: ApexActions) {
  switch (action.type) {
    case ApexActionTypes.APEX_SELECTED: {
      return Object.assign({}, state, { selectedApexId: action.payload })
    }
    case ApexActionTypes.LOAD_APEX: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ApexActionTypes.APEX_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case ApexActionTypes.ADD_APEX: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ApexActionTypes.APEX_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case ApexActionTypes.UPDATE_APEX: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ApexActionTypes.APEX_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case ApexActionTypes.DELETE_APEX: {
      return {
        ...state,
        isLoading: true
      }
    }
    case ApexActionTypes.APEX_DELETED: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state;
  }
}

export const getSelectedApexId = (state: ApexState) => state.selectedApexId;
export const {
  selectIds: selectApexIds,
  selectEntities: selectApexEntities,
  selectAll: selectAllApex,
  selectTotal: selectApexTotal
} = adapter.getSelectors()