import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { DataPersistence } from '@nrwl/nx';
import { Effect, Actions } from '@ngrx/effects';
import { IconActionTypes, IconsLoaded, LoadIcons } from './icons.actions';
import { IconsState } from './icons.reducer';
import { LogoService, Icons } from '@workspace/core-data';

@Injectable()
export class IconEffects {
  @Effect()
  loadIcons$ = this.dataPersistence.fetch(IconActionTypes.LOAD_ICONS, {
    run: (action: LoadIcons, state: IconsState) => {
      return this.iconsService.all().pipe(
        map((res: Icons[]) => new IconsLoaded(res))
      )
    },
    onError: (action: LoadIcons, error) => {
      console.error('Load Icons Effect', error)
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<IconsState>,
    private iconsService: LogoService
  ) { }
}