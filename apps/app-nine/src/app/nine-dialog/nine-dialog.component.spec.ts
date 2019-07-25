import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NineDialogComponent } from './nine-dialog.component';

describe('NineDialogComponent', () => {
  let component: NineDialogComponent;
  let fixture: ComponentFixture<NineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
