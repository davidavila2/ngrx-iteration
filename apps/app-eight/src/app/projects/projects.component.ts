import { Component, OnInit } from '@angular/core';
import { Supersmashbros, emptySupersmashbro } from '@workspace/core-data';
import { Observable } from 'rxjs';
import { SupersmashbroFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  supersmashbro$: Observable<Supersmashbros[]> = this.supersmashbroFacade.supersmashbro$
  currentSupersmashbro$: Observable<Supersmashbros> = this.supersmashbroFacade.currentSupersmashbro$;
  isLoading$: Observable<boolean> = this.supersmashbroFacade.isSupersmashbrosLoading$;

  constructor(private supersmashbroFacade: SupersmashbroFacade) { }

  resetSupersmashbro() {
    this.selectSupersmashbro(emptySupersmashbro.OwnerId)
  }

  ngOnInit() {
    this.resetSupersmashbro();
    this.supersmashbroFacade.loadSupersmashbros();
    this.supersmashbroFacade.mutations$.subscribe(_ => this.resetSupersmashbro())
  }

  selectSupersmashbro(supersmashbro) {
    this.supersmashbroFacade.selectSupersmashbro(supersmashbro.OwnerId);
  }

  saveSupersmashbro(supersmashbro) {
    supersmashbro.OwnerId ?
      this.supersmashbroFacade.updateSupersmashbro(supersmashbro) :
      this.supersmashbroFacade.createSupersmashbro(supersmashbro)
      
  }

  updateSupersmashbro(supersmashbro) {
    this.supersmashbroFacade.updateSupersmashbro(supersmashbro)
  }

  createSupersmashbro(supersmashbro) {
    this.supersmashbroFacade.createSupersmashbro(supersmashbro);
  }

  alert(supersmashbro) {
    const confirmation = confirm(`Are you sure you want to delete ${supersmashbro.name} ?`)
    if (confirmation) {
      this.supersmashbroFacade.deleteSupersmashbro(supersmashbro)
    }
  }

  cancel() {
    this.resetSupersmashbro()
  }
}
