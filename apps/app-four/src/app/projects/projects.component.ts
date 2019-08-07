import { Component, OnInit } from '@angular/core';
import { Amiibo } from '@workspace/core-data';
import { Observable } from 'rxjs';
import { AmiiboFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  amiibos$: Observable<Amiibo[]> = this.amiiboFacade.amiibo$;
  currentAmiibo$: Observable<Amiibo> = this.amiiboFacade.currentAmiibo$;
  isLoading$: Observable<boolean> = this.amiiboFacade.isAmiibosLoading$;

  constructor(private amiiboFacade: AmiiboFacade) { }

  ngOnInit() {
    this.amiiboFacade.loadAmiibo();
    this.amiibos$ = this.amiiboFacade.amiibo$;
  }

  selectAmiibo(amiibo) {
    this.amiiboFacade.selectAmiibo(amiibo.image)
  }

  saveAmiibo(amiibo) {
    amiibo.image ?
      this.amiiboFacade.updateAmiibo(amiibo) :
      this.amiiboFacade.createAmiibo(amiibo)
  }

  updateAmiibo(amiibo) {
    this.amiiboFacade.updateAmiibo(amiibo)
  }

  createAmiibo(amiibo) {
    this.amiiboFacade.createAmiibo(amiibo);
  }

  deleteAmiibo(amiibo) {
    this.amiiboFacade.deleteAmiibo(amiibo)
  }

  // amiiboResults$;

  // constructor(private amiiboService: AmiiboService) { }

  // ngOnInit() {
  //   this.getProjects();
  // }

  // getProjects() {
  //   this.amiiboResults$ = this.amiiboService.all();
  // }

}
