import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { MaterialModule } from '@workspace/material';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { CoreDataModule } from '@workspace/core-data';
import { CoreStateModule } from '@workspace/core-state';
import { RoutingModule } from './routing.module';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundModule } from '@workspace/not-found';


@NgModule({
  declarations: [AppComponent, ProjectsComponent, ProjectsDetailsComponent, ProjectsListComponent, ProjectsItemComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    UiLoginModule,
    CoreStateModule,
    FormsModule,
    NotFoundModule,
    ReactiveFormsModule,
    UiToolbarModule,
    CoreDataModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
