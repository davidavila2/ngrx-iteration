import { Component, OnInit } from '@angular/core';
import { TenService } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  ten$
  d: string;

  constructor(private tenService: TenService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.ten$ = this.tenService.all();
  }

  removeTag(d:string) {
    this.d = d.replace(/(<([^>]+)>)/ig,"");
  }

//    String.replace(searchValue: {
//     [<p>.replace](string: string, replaceValue: string): string;
// }

}
