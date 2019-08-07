import { ActionReducerMap } from '@ngrx/store';

import * as fromIcons from './icons/icons.reducer';
import * as fromPokemon from './pokemon-ngrx/pokemon.reducer';
import * as fromAmiibo from './amiibo-ngrx/amiibo.reducer';

export interface AppState {
  icons: fromIcons.IconsState;
  pokemon: fromPokemon.PokemonState;
  amiibo: fromAmiibo.AmiiboState;
}

export const reducers: ActionReducerMap<AppState> = {
  icons: fromIcons.IconsReducer,
  pokemon: fromPokemon.PokemonReducer,
  amiibo: fromAmiibo.AmiiboReducer,
}