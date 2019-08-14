import { Component, OnInit } from '@angular/core';
import { RicknmortyService, RicknmortyDetails, emptyRicknmortyDetails } from '@workspace/core-data';
import { Observable } from 'rxjs';
import { RickFacade } from '@workspace/core-state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  rick$: Observable<RicknmortyDetails[]> = this.rickFacade.rick$;
  currentRick$: Observable<RicknmortyDetails> = this.rickFacade.currentRick$;
  isLoading$: Observable<boolean> = this.rickFacade.isRickLoading$;

  constructor(private rickFacade: RickFacade) { }
  
  resetRick() {
    this.selectRick(emptyRicknmortyDetails.id);
  }

  ngOnInit() {
    this.resetRick();
    this.rickFacade.loadRick();
    this.rickFacade.mutations$.subscribe(_ => this.resetRick())
  }

  selectRick(rick: number) {
    this.rickFacade.selectRick(rick)
  }

  saveRick(rick) {
    rick.id ?
      this.rickFacade.updateRick(rick) :
      this.rickFacade.createRick(rick)
  }

  updateRick(rick) {
    this.rickFacade.updateRick(rick)
  }

  createRick(rick) {
    this.rickFacade.createRick(rick)
  }

  alert(rick) {
    const confirmation = confirm(`Are you sure you want to delete ${rick.name}`)
    if (confirmation) {
      this.rickFacade.deleteRick(rick)
    }
  }

  cancel() {
    this.resetRick()
  }
}
