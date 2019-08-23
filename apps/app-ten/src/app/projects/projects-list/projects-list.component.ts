import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Apexx } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() apex: Apexx[];
  @Input() loading: boolean
  @Input() readonly = false;
  @Output() selected = new EventEmitter()
  @Output() deleted = new EventEmitter()
}
