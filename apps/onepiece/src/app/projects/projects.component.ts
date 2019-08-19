import { Component, OnInit } from '@angular/core';
import { Onepiece, emptyOnepiece } from '@workspace/core-data';
import { Observable } from 'rxjs';
import { OnepieceFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  onepiece$: Observable<Onepiece[]> = this.onepieceFacade.onepiece$;
  currentOnepiece$: Observable<Onepiece> = this.onepieceFacade.currentOnepiece$;
  isLoading$: Observable<boolean> = this.onepieceFacade.isOnepieceLoading$;

  constructor(private onepieceFacade: OnepieceFacade) { }
  
  resetOnepiece() {
    this.selectOnepiece(emptyOnepiece.id);
  }

  ngOnInit() {
    this.resetOnepiece();
    this.onepieceFacade.loadOnepiece();
    this.onepieceFacade.mutations$.subscribe(_ => this.resetOnepiece());
  }

  selectOnepiece(onepiece: number) {
    this.onepieceFacade.selectOnepiece(onepiece);
  }

  saveOnepiece(onepiece) {
    onepiece.id ?
      this.onepieceFacade.updateOnepiece(onepiece) :
      this.onepieceFacade.createOnepiece(onepiece)
      
  }

  updateOnepiece(onepiece) {
    this.onepieceFacade.updateOnepiece(onepiece)
  }

  createOnepiece(onepiece) {
    this.onepieceFacade.createOnepiece(onepiece)
  }

    alert(onepiece) {
      const confirmation = confirm(`Are you sure you want to delete ${onepiece.chapter}`)
      if (confirmation) {
        this.onepieceFacade.deleteOnepiece(onepiece);
      }
    }


  cancel() {
    this.resetOnepiece();
  }
}