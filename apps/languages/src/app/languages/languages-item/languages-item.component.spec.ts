import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesItemComponent } from './languages-item.component';

describe('LanguagesItemComponent', () => {
  let component: LanguagesItemComponent;
  let fixture: ComponentFixture<LanguagesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
