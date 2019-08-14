import { ActionReducerMap } from '@ngrx/store';

import * as fromIcons from './icons/icons.reducer';
import * as fromPokemon from './pokemon-ngrx/pokemon.reducer';
import * as fromAmiibo from './amiibo-ngrx/amiibo.reducer';
import * as fromMarvel from './marvel-ngrx/marvel.reducer';
import * as fromStarwars from './starwars-ngrx/starwars.reducer';
import * as fromOnepiece from './onepiece-ngrx/onepiece.reducer';
import * as fromRick from './ngrx-ricknmorty/ricknmorty.reducer'

export interface AppState {
  icons: fromIcons.IconsState;
  pokemon: fromPokemon.PokemonState;
  amiibo: fromAmiibo.AmiiboState;
  marvel: fromMarvel.MarvelState;
  starwars: fromStarwars.StarwarsState;
  onepiece: fromOnepiece.OnepieceState;
  rick: fromRick.RickState;
}

export const reducers: ActionReducerMap<AppState> = {
  icons: fromIcons.IconsReducer,
  pokemon: fromPokemon.PokemonReducer,
  amiibo: fromAmiibo.AmiiboReducer,
  marvel: fromMarvel.MarvelReducer,
  starwars: fromStarwars.StarwarsReducer,
  onepiece: fromOnepiece.OnepieceReducer,
  rick: fromRick.RickReducer
}