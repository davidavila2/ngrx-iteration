import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { HttpClientModule } from '@angular/common/http';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { WildCardModule } from '@workspace/wild-card';
import { RoutingModule } from './routing.module';
import { CoreStateModule } from '@workspace/core-state';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';


@NgModule({
  declarations: [AppComponent, ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent, ProjectsItemComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    UiLoginModule,
    UiToolbarModule,
    WildCardModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
