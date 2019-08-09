import { ActionReducerMap } from '@ngrx/store';

import * as fromIcons from './icons/icons.reducer';
import * as fromPokemon from './pokemon-ngrx/pokemon.reducer';
import * as fromAmiibo from './amiibo-ngrx/amiibo.reducer';
import * as fromMarvel from './marvel-ngrx/marvel.reducer';
import * as fromStarwars from './starwars-ngrx/starwars.reducer'

export interface AppState {
  icons: fromIcons.IconsState;
  pokemon: fromPokemon.PokemonState;
  amiibo: fromAmiibo.AmiiboState;
  marvel: fromMarvel.MarvelState;
  starwars: fromStarwars.StarwarsState;
}

export const reducers: ActionReducerMap<AppState> = {
  icons: fromIcons.IconsReducer,
  pokemon: fromPokemon.PokemonReducer,
  amiibo: fromAmiibo.AmiiboReducer,
  marvel: fromMarvel.MarvelReducer,
  starwars: fromStarwars.StarwarsReducer
}