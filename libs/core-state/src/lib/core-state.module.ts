import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/nx';
import { reducers } from '.';
import { IconEffects } from './icons/icons.effects';
import { PokemonEffects } from './pokemon-ngrx/pokemon.effects';
import { AmiiboEffects } from './amiibo-ngrx/amiibo.effects';


@NgModule({
  imports: [
  CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([
      IconEffects,
      PokemonEffects,
      AmiiboEffects
    ]),
  ]
})
export class CoreStateModule {}