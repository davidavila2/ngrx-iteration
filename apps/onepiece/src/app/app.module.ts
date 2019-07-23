import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { CoreDataModule } from '@workspace/core-data';
import { MaterialModule } from '@workspace/material';
import { HttpClientModule } from '@angular/common/http';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { WildCardModule } from '@workspace/wild-card';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    CoreDataModule,
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
