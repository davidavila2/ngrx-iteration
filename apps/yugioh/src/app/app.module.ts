import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { MaterialModule } from '@workspace/material';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { CoreDataModule } from '@workspace/core-data';
import { WildCardModule } from '@workspace/wild-card';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [AppComponent, ProjectsComponent],
  imports: [
BrowserModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    CoreDataModule,
    WildCardModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
