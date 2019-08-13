import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Onepiece } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() onepiece: Onepiece[];
  @Input() readonly = false;
  @Input() loading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}