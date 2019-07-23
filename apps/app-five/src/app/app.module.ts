import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { MaterialModule } from '@workspace/material';
import { UiLoginModule } from '@workspace/ui-login';
import { WildCardModule } from '@workspace/wild-card';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { CoreDataModule } from '@workspace/core-data';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';


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
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
