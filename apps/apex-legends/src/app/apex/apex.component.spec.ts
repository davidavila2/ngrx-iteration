import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApexComponent } from './apex.component';
import { ApexListComponent } from './apex-list/apex-list.component';
import { ApexDetailsComponent } from './apex-details/apex-details.component';
import { MaterialModule } from '@workspace/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ApexFacade } from '@workspace/core-state';
import { DebugElement } from '@angular/core';
import { defaultState } from '@workspace/core-state';
import { Store } from '@ngrx/store';
import { emptyApex, Apex } from '@workspace/core-data';

describe('ApexComponent', () => {
  let component: ApexComponent;
  // let componentTwo: ApexListComponent;
  let fixture: ComponentFixture<ApexComponent>;
  let de: DebugElement;
  let apexFacade: ApexFacade;
  let store: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApexComponent,
        ApexListComponent,
        ApexDetailsComponent
      ],
      imports: [
        MaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        provideMockStore()
      ]
    })

      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    store.setState(defaultState);

    fixture = TestBed.createComponent(ApexComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
    apexFacade = de.injector.get(ApexFacade);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#resetApex', () => {
    it('should reset form', () => {
      expect(component.resetApex)
    })

    // it('should should reset form'() => {
    //   expect()
    // })
  })

  it('should delete an apex character', () => {
    const test = jest.spyOn(apexFacade, 'deleteApex');

    expect(apexFacade.deleteApex).toBe(test)
  })

  describe('#saveApex', () => {
    it('should save a character', () => {
      const test = jest.spyOn(apexFacade, 'createApex');

      expect(apexFacade.createApex).toBe(test)
    })

    it('should update a character', () => {
      const test = jest.spyOn(apexFacade, 'updateApex')

      expect(apexFacade.updateApex).toBe(test)
    })
  });

  describe('#selectApex', () => {
    it('should select an Apex Character Id', () => {
      jest.spyOn(apexFacade, 'selectApex');

      component.selectApex(emptyApex);

      expect(apexFacade.selectApex).toHaveBeenCalledWith(emptyApex.id);
    });

    // it('should path from current apex to form', () => {
    //   const testApex = { id: 1111, ...emptyApex }

    //   const form = component.form;

    //   jest.spyOn(form, 'patchValue');

    //   component.selectApex(testApex);

    //   expect(form.value).toHaveBeenCalledWith(testApex)
    // })
  })


});

// class ApexTestComponent {
//   apex: Apex = { id: 1, name: 'bloodhound', lore: '', function: '', about: null };
//   selected: Apex;
//   selectApex(apex: Apex) { this.selected = apex }
// }