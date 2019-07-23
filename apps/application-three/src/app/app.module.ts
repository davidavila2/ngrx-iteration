import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from '@workspace/material';
import { UiLoginModule } from '@workspace/ui-login';
import { WildCardModule } from '@workspace/wild-card';
import { RoutingModule } from './routing.module';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { CoreDataModule } from '@workspace/core-data';
import { CoreStateModule } from '@workspace/core-state';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
  BrowserModule,
    MaterialModule,
    UiLoginModule,
    WildCardModule,
    UiToolbarModule,
    CoreDataModule,
    CoreStateModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
