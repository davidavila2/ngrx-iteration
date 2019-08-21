import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Nine } from '@workspace/core-data';


@Component({
  selector: 'workspace-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() nine: Nine[];
  @Input() loading: boolean;
  @Input() readonly = false
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}