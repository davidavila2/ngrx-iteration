import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RicknmortyDetails } from '@workspace/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() rick: RicknmortyDetails[];
  @Input() readonly = false;
  @Input() loading: boolean;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
