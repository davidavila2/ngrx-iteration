import { ActionReducerMap } from '@ngrx/store';

import * as fromIcons from './icons/icons.reducer';
import * as fromPokemon from './pokemon-ngrx/pokemon.reducer';
import * as fromAmiibo from './amiibo-ngrx/amiibo.reducer';
import * as fromMarvel from './marvel-ngrx/marvel.reducer';
import * as fromStarwars from './starwars-ngrx/starwars.reducer';
import * as fromOnepiece from './onepiece-ngrx/onepiece.reducer';
import * as fromRick from './ngrx-ricknmorty/ricknmorty.reducer';
import * as fromSupersmashbros from './superSmashBros-ngrx/ssb.reducer';
import * as fromHarrypotter from './harrypotter-ngrx/harrypotter.reducer';
import * as fromApex from './apex-ngrx/apex.reducer'

export interface AppState {
  icons: fromIcons.IconsState;
  pokemon: fromPokemon.PokemonState;
  amiibo: fromAmiibo.AmiiboState;
  marvel: fromMarvel.MarvelState;
  starwars: fromStarwars.StarwarsState;
  onepiece: fromOnepiece.OnepieceState;
  rick: fromRick.RickState;
  supersmashbros: fromSupersmashbros.SupersmashbrosState;
  harrypotter: fromHarrypotter.HarrypotterState;
  apex: fromApex.ApexState
}

export const reducers: ActionReducerMap<AppState> = {
  icons: fromIcons.IconsReducer,
  pokemon: fromPokemon.PokemonReducer,
  amiibo: fromAmiibo.AmiiboReducer,
  marvel: fromMarvel.MarvelReducer,
  starwars: fromStarwars.StarwarsReducer,
  onepiece: fromOnepiece.OnepieceReducer,
  rick: fromRick.RickReducer,
  supersmashbros: fromSupersmashbros.SupersmashbrosReducer,
  harrypotter: fromHarrypotter.HarrypotterReducer,
  apex: fromApex.ApexReducer
}

export const defaultState: AppState = {
  icons: { ids: [] } as fromIcons.IconsState,
  pokemon: { ids: [] } as fromPokemon.PokemonState,
  amiibo: { ids: [] } as fromAmiibo.AmiiboState,
  marvel: { ids: [] } as fromMarvel.MarvelState,
  starwars: { ids: [] } as fromStarwars.StarwarsState,
  onepiece: { ids: [] } as fromOnepiece.OnepieceState,
  rick: { ids: [] } as fromRick.RickState,
  supersmashbros: { ids: [] } as fromSupersmashbros.SupersmashbrosState,
  harrypotter: { ids: [] } as fromHarrypotter.HarrypotterState,
  apex: { ids: [] } as fromApex.ApexState
}