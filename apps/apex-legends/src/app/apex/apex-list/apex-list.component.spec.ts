import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexListComponent } from './apex-list.component';
import { MaterialModule } from '@workspace/material';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Apex } from '@workspace/core-data';
import { By } from '@angular/platform-browser';

describe('ApexListComponent', () => {
  let component: ApexListComponent;
  let fixture: ComponentFixture<ApexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApexListComponent],
      imports: [ MaterialModule, RouterTestingModule ],
      providers: [ provideMockStore(), ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should Select a Character and raise event when clicked', () => {
  //   let selectedApex: Apex;
  //   component.selected.subscribe((apex: Apex) => selectedApex = apex)
  //   expect(component.selected).toBe(selectedApex)
  // })
});
