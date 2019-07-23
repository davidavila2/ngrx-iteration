import { Component, OnInit } from '@angular/core';
import { EightService } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  eight$
  constructor(private eightService: EightService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.eight$ = this.eightService.all()
  }

}
