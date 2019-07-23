import { Component, OnInit } from '@angular/core';
import { YugiohService } from '@workspace/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  yugioh$

  constructor(private yugiohService: YugiohService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.yugioh$ = this.yugiohService.all();
  }

}
