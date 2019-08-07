import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { RoutingModule } from './routing.module';

import { MaterialModule } from '@workspace/material';
import { CoreDataModule } from '@workspace/core-data';
import { CoreStateModule } from '@workspace/core-state';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';
import { WildCardModule } from '@workspace/wild-card';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLoginModule,
    UiToolbarModule,
    HttpClientModule,
    WildCardModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
