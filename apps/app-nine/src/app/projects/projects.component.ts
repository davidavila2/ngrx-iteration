import { Component, OnInit } from '@angular/core';
import { NineService } from '@workspace/core-data';
import { MatDialog } from '@angular/material';
import { NineDialogComponent } from '../nine-dialog/nine-dialog.component';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  nine$;

  constructor(private nineService: NineService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.nine$ = this.nineService.all();
  }

  openDialog(): void {
  const dialogRef = this.dialog.open(NineDialogComponent, {
    width: '100%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog Closed');

  })
};


}
