import { Component, OnInit } from '@angular/core';
import { NineService, Nine, emptyHarrypotter } from '@workspace/core-data';
import { MatDialog } from '@angular/material';
import { NineDialogComponent } from '../nine-dialog/nine-dialog.component';
import { Observable } from 'rxjs';
import { HarrypotterFacade } from '@workspace/core-state';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  harrypotter$: Observable<Nine[]> = this.harrypotterFacade.harrypotter$
  currentHarrypotter$: Observable<any> = this.harrypotterFacade.currentHarrypotter$
  isLoading$: Observable<boolean> = this.harrypotterFacade.isHarrypotterLoading$;

  constructor(
    private harrypotterFacade: HarrypotterFacade,
    public dialog: MatDialog
  ) { }

  resetHarrypotter() {
    this.selectHarrypotter(emptyHarrypotter.name);
  }

  ngOnInit() {
    this.resetHarrypotter();
    this.harrypotterFacade.loadHarrypotter();
    this.harrypotterFacade.mutations$.subscribe(_ => this.resetHarrypotter())
  }

  selectHarrypotter(harrypotter) {
    this.harrypotterFacade.selectHarrypotter(harrypotter.id)
  }

  saveHarrypotter(harrypotter) {
    harrypotter.id ? 
      this.harrypotterFacade.updateHarrypotter(harrypotter) :
      this.harrypotterFacade.createHarrypotter(harrypotter)
  }

  updateHarrypotter(harrypotter) {
    this.harrypotterFacade.updateHarrypotter(harrypotter);
  }

  alert(harrypotter) {
    const confirmation = confirm(`Are you sure you want to delete ${harrypotter.id} ?`)
    if (confirmation) {
      this.harrypotterFacade.deleteHarrypotter(harrypotter)
    }
  }
  
  cancel() {
    this.resetHarrypotter()
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(NineDialogComponent, {
  //     width: '100%'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Dialog Closed');
  //   })
  // };
}
