import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

import { MaterialModule } from '@workspace/material';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';
import { WildCardModule } from '@workspace/wild-card';
import { CoreDataModule } from '@workspace/core-data';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreStateModule } from '@workspace/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';


@NgModule({
  declarations: [AppComponent, ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent, ProjectsItemComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    WildCardModule,
    FormsModule,
    ReactiveFormsModule,
    CoreStateModule,
    CoreDataModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
