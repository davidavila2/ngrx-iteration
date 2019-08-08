import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { MarvelCharacters } from '@workspace/core-data';
import { MarvelActions, MarvelActionsTypes } from './marvel.actions';



export interface MarvelState extends EntityState<MarvelCharacters>{
  selectedMarvelId: number | 0;
  isLoading: boolean
}

export const adapter: EntityAdapter<MarvelCharacters> = createEntityAdapter<MarvelCharacters>();
export const initialState: MarvelState = adapter.getInitialState({
  selectedMarvelId: 0,
  isLoading: false
})

export function MarvelReducer(state = initialState, action: MarvelActions) {
  switch (action.type) {
    case MarvelActionsTypes.MARVEL_SELECTED: {
      return Object.assign({}, state, { selectedMarvelId: action.payload})
    }
    case MarvelActionsTypes.LOAD_MARVEL: {
      return {
        ...state,
        isLoading: true
      }
    }
    case MarvelActionsTypes.MARVEL_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state, 
        isLoading: false
      })
    }
    case MarvelActionsTypes.ADD_MARVEL: {
      return {
        ...state,
        isLoading: true
      }
    }
    case MarvelActionsTypes.MARVEL_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case MarvelActionsTypes.UPDATE_MARVEL: {
      return {
        ...state,
        isLoading: true
      }
    }
    case MarvelActionsTypes.MARVEL_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case MarvelActionsTypes.DELETE_MARVEL: {
      return {
        ...state, 
        isLoading: true
      }
    }
    case MarvelActionsTypes.MARVEL_DELETED: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state
  }
}

export const getSelectedMarvelId = (state: MarvelState) => state.selectedMarvelId;
export const {
  selectIds: selectMarvelIds,
  selectEntities: selectMarvelEntites,
  selectAll: selectAllMarvel,
  selectTotal: selectMarvelTotal
} = adapter.getSelectors();