import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  amiiboResults$;

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.amiiboResults$ = this.starwarsService.all();
  }

}
