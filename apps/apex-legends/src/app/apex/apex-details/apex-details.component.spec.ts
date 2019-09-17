import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexDetailsComponent } from './apex-details.component';

describe('ApexDetailsComponent', () => {
  let component: ApexDetailsComponent;
  let fixture: ComponentFixture<ApexDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
