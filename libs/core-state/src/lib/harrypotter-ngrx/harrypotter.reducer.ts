import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Nine } from '@workspace/core-data';
import { HarrypotterActions, HarrypotterActionTypes } from './harrypotter.actions';


export interface HarrypotterState extends EntityState<Nine> {
  selectedHarrypotterId: string | null;
  isLoading: boolean
}

export const adapter: EntityAdapter<Nine> = createEntityAdapter<Nine>();
export const initialState: HarrypotterState = adapter.getInitialState({
  selectedHarrypotterId: null,
  isLoading: false
})

export function HarrypotterReducer(state = initialState, action: HarrypotterActions) {
  switch (action.type) {
    case HarrypotterActionTypes.HARRYPOTTER_SELECTED: {
      return Object.assign({}, state, { selectedHarrypotterId: action.payload})
    }
    case HarrypotterActionTypes.LOAD_HARRYPOTTER: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HarrypotterActionTypes.HARRYPOTTER_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      }) 
    }
    case HarrypotterActionTypes.ADD_HARRYPOTTER: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HarrypotterActionTypes.HARRYPOTTER_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case HarrypotterActionTypes.UPDATE_HARRYPOTTER: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HarrypotterActionTypes.HARRYPOTTER_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case HarrypotterActionTypes.DELETE_HARRYPOTTER: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HarrypotterActionTypes.HARRYPOTTER_DELETED: {
      return adapter.removeOne(action.payload.id, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state;
  }
}

export const getSelectedHarrypotterId = (state: HarrypotterState) => state.selectedHarrypotterId;
export const {
  selectIds: selectHarrypotterIds,
  selectEntities: selectHarrypotterEntities,
  selectAll: selectAllHarrypotter,
  selectTotal: selectHarrypotterTotal
} = adapter.getSelectors()