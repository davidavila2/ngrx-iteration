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


@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    UiToolbarModule,
    UiLoginModule,
    WildCardModule,
    CoreDataModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
