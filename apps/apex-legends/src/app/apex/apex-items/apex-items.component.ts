import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApexFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-apex-items',
  templateUrl: './apex-items.component.html',
  styleUrls: ['./apex-items.component.scss']
})
export class ApexItemsComponent implements OnInit {
  apexCharacter$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private apexFacade: ApexFacade
  ) { }

  ngOnInit() {
    this.apexFacade.loadApex();
    this.route.params.subscribe(param => this.apexFacade.selectApex(param['id']));
    this.apexCharacter$ = this.apexFacade.currentApex$;
  }
}