import { Component, OnInit} from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NineService } from '@workspace/core-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'workspace-nine-dialog',
  templateUrl: './nine-dialog.component.html',
  styleUrls: ['./nine-dialog.component.scss']
})
export class NineDialogComponent {
  // private _projectItem$;
  // nine$;

  // public get projectItem$() {
  //   return this._projectItem$;
  // }
  
  // public set projectItem$(value) {
  //   this._projectItem$ = value;
  // }

  // constructor(
  //   private nineService: NineService,
  //   public dialog: MatDialog,
  //   public dialogRef: MatDialogRef<NineDialogComponent>,
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) { }

  // ngOnInit() {
  //   this.getProjects();
  //   this.route.params.subscribe(param => {
  //     const name = param['name'];
  //     this.projectItem$ = this.nineService.findOne(name);
  //   })
  // }



  // getProjects() {
  //   this.nine$ = this.nineService.all();
  // }


  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
