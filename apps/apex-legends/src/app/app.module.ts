import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreStateModule } from '@workspace/core-state';
import { MaterialModule } from '@workspace/material';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { CoreDataModule } from '@workspace/core-data';
import { NotFoundModule } from '@workspace/not-found';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ApexComponent } from './apex/apex.component';
import { ApexListComponent } from './apex/apex-list/apex-list.component';
import { ApexDetailsComponent } from './apex/apex-details/apex-details.component';
import { ApexItemsComponent } from './apex/apex-items/apex-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ApexComponent,
    ApexListComponent,
    ApexDetailsComponent,
    ApexItemsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    CoreStateModule,
    HttpClientModule,
    NotFoundModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
