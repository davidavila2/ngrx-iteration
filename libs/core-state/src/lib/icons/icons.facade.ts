import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import * as IconsActions from './icons.actions';
import { IconsState } from './icons.reducer';
import { selectAllIcons } from './icons.selectors'

@Injectable({ providedIn: 'root' })
export class IconsFacade {
  icons$ = this.store.pipe(select(selectAllIcons));
  constructor(private store: Store<IconsState>, private actions$: ActionsSubject) { }
  
  loadIcons() {
    this.store.dispatch(new IconsActions.LoadIcons());
  }
}