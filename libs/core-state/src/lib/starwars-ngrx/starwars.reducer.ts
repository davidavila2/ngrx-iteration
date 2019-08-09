import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ShowSomething } from '@workspace/core-data';
import { StarwarsActions, StarwarsActionTypes, StarwarsLoaded } from './starwars.actions';

export interface StarwarsState extends EntityState<ShowSomething> {
  selectedStarwarsId: string | null;
  isLoading: boolean
}

export const adapter: EntityAdapter<ShowSomething> = createEntityAdapter<ShowSomething>();
export const initialState: StarwarsState = adapter.getInitialState({
  selectedStarwarsId: null,
  isLoading: false
})

export function StarwarsReducer(state = initialState, action: StarwarsActions) {
  switch (action.type) {
    case StarwarsActionTypes.STARWARS_SELECTED: {
      return Object.assign({}, state, { selectedStarwarsId: action.payload })
    }
    case StarwarsActionTypes.LOAD_STARWARS: {
      return {
        ...state,
        isLoading: false
      }
    }
    case StarwarsActionTypes.STARWARS_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      }) 
    }
    case StarwarsActionTypes.ADD_STARWARS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case StarwarsActionTypes.STARWARS_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false,
      })
    }
    case StarwarsActionTypes.UPDATE_STARWARS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case StarwarsActionTypes.STARWARS_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case StarwarsActionTypes.DELETE_STARWARS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case StarwarsActionTypes.STARWARS_DELETED: {
      return adapter.removeOne(action.payload.name, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state;
  }
}

export const getSelectedStarwarsId = (state: StarwarsState) => state.selectedStarwarsId;
export const {
  selectIds: selectStarwarsIds,
  selectEntities: selectStarwarsEntities,
  selectAll: selectAllStarwars,
  selectTotal: selectStarwarsTotal
} = adapter.getSelectors()