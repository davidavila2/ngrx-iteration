import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@workspace/material';

import { ProjectsComponent } from './projects/projects.component';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { WildCardModule } from '@workspace/wild-card';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { NineDialogComponent } from './nine-dialog/nine-dialog.component';
import { CoreStateModule } from '@workspace/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsItemsComponent } from './projects/projects-items/projects-items.component';

@NgModule({
  declarations: [AppComponent, ProjectsComponent, NineDialogComponent, ProjectsListComponent, ProjectsDetailsComponent, ProjectsItemsComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    WildCardModule,
    HttpClientModule,
    RoutingModule
  ],
  entryComponents: [NineDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
