import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@workspace/material';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { CoreDataModule } from '@workspace/core-data';
import { HttpClientModule } from '@angular/common/http';
import { WildCardModule } from '@workspace/wild-card';
import { RoutingModule } from './routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { CoreStateModule } from '@workspace/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsItemsComponent } from './projects/projects-items/projects-items.component';

@NgModule({
  declarations: [AppComponent, ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent, ProjectsItemsComponent],
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
    WildCardModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
