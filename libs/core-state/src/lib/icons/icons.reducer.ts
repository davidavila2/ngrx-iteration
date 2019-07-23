import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Icons } from '@workspace/core-data';
import { IconActions, IconActionTypes } from './icons.actions';


export interface IconsState extends EntityState<Icons> {
  isLoading: boolean;
}

export const adapter: EntityAdapter<Icons> = createEntityAdapter<Icons>();
export const initialState: IconsState = adapter.getInitialState({
  isLoading: false
});

export function IconsReducer(state = initialState, action: IconActions) {
  switch (action.type) {
    case IconActionTypes.LOAD_ICONS: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case IconActionTypes.ICONS_LOADED: {
      return adapter.addMany(action.payload, {
        ...state,
        isLoading: false,
      })
    }
    default:
      return state;
  }
}

export const {
  selectAll: selectAllIcons,
  selectEntities: selectAllIconEntities
} = adapter.getSelectors()
