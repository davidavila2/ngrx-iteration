import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { RickActions, RickActionTypes } from './ricknmorty.actions';
import { RicknmortyDetails } from '@workspace/core-data';


export interface RickState extends EntityState<RicknmortyDetails> {
  selectedRickId: number | 0;
  isLoading: boolean
}

export const adapter: EntityAdapter<RicknmortyDetails> = createEntityAdapter<RicknmortyDetails>();
export const initialState: RickState = adapter.getInitialState({
  selectedRickId: 0,
  isLoading: false
})

export function RickReducer(state = initialState, action: RickActions) {
  switch (action.type) {
    case RickActionTypes.RICK_SELECTED: {
      return Object.assign({}, state, { selectedRickId: action.payload })
    }
    case RickActionTypes.LOAD_RICK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case RickActionTypes.RICK_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case RickActionTypes.ADD_RICK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case RickActionTypes.RICK_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case RickActionTypes.UPDATE_RICK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case RickActionTypes.RICK_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state, 
        isLoading: false
      })
    }
    case RickActionTypes.DELETE_RICK: {
      return {
        ...state,
        isLoading: true
      }
    }
    case RickActionTypes.RICK_DELETED: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state;
  }
}

export const getSelectedRickId = (state: RickState) => state.selectedRickId;
export const {
  selectIds: selectRickIds,
  selectEntities: selectRickEntities,
  selectAll: selectAllRicks,
  selectTotal: selectRickTotal
} = adapter.getSelectors()