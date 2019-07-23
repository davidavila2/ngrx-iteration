import { Component, OnInit } from '@angular/core';
import { SomethingService } from '@workspace/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  funny$

  constructor(private somethingService: SomethingService) { }

  ngOnInit() {
    this.getSomething();
  }

  getSomething() {
    this.funny$ = this.somethingService.all();
  }

}
