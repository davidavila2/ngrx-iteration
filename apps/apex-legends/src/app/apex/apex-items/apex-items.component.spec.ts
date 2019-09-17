import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ApexItemsComponent } from './apex-items.component';
import { MaterialModule } from '@workspace/material';
import { ActivatedRoute, RouterModule, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApexItemsComponent', () => {
  let component: ApexItemsComponent;
  let fixture: ComponentFixture<ApexItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApexItemsComponent],
      imports: [ MaterialModule, RouterTestingModule ],
      providers: [ provideMockStore(), ]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
