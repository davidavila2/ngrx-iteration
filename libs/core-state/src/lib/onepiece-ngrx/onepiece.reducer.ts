import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Onepiece } from '@workspace/core-data';
import { OnepieceActions, OnepieceActionTypes } from './onepiece.actions';


export interface OnepieceState extends EntityState<Onepiece> {
  selectedOnepieceId: number | 0;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Onepiece> = createEntityAdapter<Onepiece>();
export const initialState: OnepieceState = adapter.getInitialState({
  selectedOnepieceId: 0,
  isLoading: false
})

export function OnepieceReducer(state = initialState, action: OnepieceActions) {
  switch (action.type) {
    case OnepieceActionTypes.ONEPIECE_SELECTED: {
      return Object.assign({}, state, {selectedOnepieceId: action.payload})
    }
    case OnepieceActionTypes.LOAD_ONEPIECE: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case OnepieceActionTypes.ONEPIECE_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case OnepieceActionTypes.ADD_ONEPIECE: {
      return {
        ...state,
        isLoading: true
      }
    }
    case OnepieceActionTypes.ONEPIECE_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case OnepieceActionTypes.UPDATE_ONEPIECE: {
      return {
        ...state,
        isLoading: true
      }
    }
    case OnepieceActionTypes.ONEPIECE_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case OnepieceActionTypes.DELETE_ONEPIECE: {
      return {
        ...state, 
        isLoading: true
      }
    }
    case OnepieceActionTypes.ONEPIECE_DELETED: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state
  }
}

export const getSelectedOnepieceId = (state: OnepieceState) => state.selectedOnepieceId;
export const {
  selectIds: selectOnepieceIds,
  selectEntities: selectOnepieceEntities,
  selectAll: selectAllOnepiece,
  selectTotal: selectOnepieceTotal
} = adapter.getSelectors()