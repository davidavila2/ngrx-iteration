import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Amiibo } from '@workspace/core-data';
import { AmiiboActionTypes, AmiiboActions } from './amiibo.actions';


export interface AmiiboState extends EntityState<Amiibo> {
  selectedAmiiboId: string | null;
  isLoading: boolean
}

export const adapter: EntityAdapter<Amiibo> = createEntityAdapter<Amiibo>({selectId: amiibo => amiibo.name});
export const initialState: AmiiboState = adapter.getInitialState({
  selectedAmiiboId: null,
  isLoading: false
});

export function AmiiboReducer(state = initialState, action: AmiiboActions) {
  switch (action.type) {
    case AmiiboActionTypes.AMIIBO_SELECTED: {
      return Object.assign({}, state, { selectedAmiiboId: action.payload })
    }
    case AmiiboActionTypes.LOAD_AMIIBO: {
      return {
        ...state,
        isLoading: true
      }
    }
    case AmiiboActionTypes.AMIIBO_LOADED: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case AmiiboActionTypes.ADD_AMIIBO: {
      return {
        ...state,
        isLoading: true
      }
    }
    case AmiiboActionTypes.AMIIBO_ADDED: {
      return adapter.addOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case AmiiboActionTypes.UPDATE_AMIIBO: {
      return {
        ...state,
        isLoading: true
      }
    }
    case AmiiboActionTypes.AMIIBO_UPDATED: {
      return adapter.upsertOne(action.payload, {
        ...state,
        isLoading: false
      })
    }
    case AmiiboActionTypes.DELETE_AMIIBO: {
      return {
        ...state,
        isLoading: true
      }
    }
    case AmiiboActionTypes.AMIIBO_DELETED: {
      return adapter.removeOne(action.payload.image, {
        ...state,
        isLoading: false
      })
    }
    default:
      return state;
  }
}

export const getSelectedAmiiboId = (state: AmiiboState) => state.selectedAmiiboId;
export const {
  selectIds: selectAmiiboIds,
  selectEntities: selectAmiiboEntities,
  selectAll: selectAllAmiibo,
  selectTotal: selectAmiiboTotal
} = adapter.getSelectors();