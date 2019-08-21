import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsItemsComponent } from './projects-items.component';

describe('ProjectsItemsComponent', () => {
  let component: ProjectsItemsComponent;
  let fixture: ComponentFixture<ProjectsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
