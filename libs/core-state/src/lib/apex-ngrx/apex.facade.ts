import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as ApexAction from './apex.actions'
import { ApexActionTypes } from './apex.actions'
import { ApexState } from './apex.reducer';
import { selectAllApex, selectCurrentApex, selectApexLoadingStatus } from './apex.selectors';
import { Apex } from '@workspace/core-data';


@Injectable({ providedIn: 'root' })
export class ApexFacade {
  apex$ = this.store.pipe(select(selectAllApex));
  currentApex$ = this.store.pipe(select(selectCurrentApex));
  isApexLoading$ = this.store.pipe(select(selectApexLoadingStatus))

  mutations$ = this.actions$
    .pipe(
      filter(action => 
        action.type === ApexActionTypes.APEX_ADDED
          || action.type === ApexActionTypes.APEX_UPDATED
          || action.type === ApexActionTypes.APEX_DELETED)
    )

  constructor(private store: Store<ApexState>, private actions$: ActionsSubject) { }

  selectApex(apexId) {
    this.store.dispatch(new ApexAction.ApexSelected(apexId))
  }

  loadApex() {
    this.store.dispatch(new ApexAction.LoadApex())
  }

  createApex(apex: Apex) {
    this.store.dispatch(new ApexAction.AddApex(apex))
  }

  updateApex(apex: Apex) {
    this.store.dispatch(new ApexAction.UpdateApex(apex))
  }

  deleteApex(apex: Apex) {
    this.store.dispatch(new ApexAction.DeleteApex(apex))
  }
}