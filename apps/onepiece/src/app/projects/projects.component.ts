import { Component, OnInit } from '@angular/core';
import { OnepieceService } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  onepiece$;

  constructor(private onepieceService: OnepieceService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.onepiece$ = this.onepieceService.all();
  }

}
