import { Component, OnInit } from '@angular/core';
import { Icons } from '@workspace/core-data'
import { IconsFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  icons$: Observable<Icons[]> = this.iconsFacade.icons$;

  constructor(private iconsFacade: IconsFacade) { }

  ngOnInit() {
    this.iconsFacade.loadIcons();
  }
}