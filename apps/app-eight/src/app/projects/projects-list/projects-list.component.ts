import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supersmashbros } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() supersmashbros: Supersmashbros[];
  @Input() loading: boolean;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
