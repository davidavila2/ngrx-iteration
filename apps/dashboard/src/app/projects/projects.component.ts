import { Component, OnInit } from '@angular/core';
import { LogoService, Icons } from '@workspace/core-data'
import { IconsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // icons$: Observable<Icons[]> = this.iconsFacade.icons$;


  // constructor(private iconsFacade: IconsFacade) { }

  // ngOnInit() {
  //   this.iconsFacade.loadIcons();
  // }

  icons$;

  constructor(private logoService: LogoService) { }
  
  ngOnInit() {
    this.getLogos();
  }

  getLogos() {
    this.icons$ = this.logoService.all();
  }

}