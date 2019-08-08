import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';

import { RoutingModule } from './routing.module';

import { UiToolbarModule } from '@workspace/ui-toolbar';
import { UiLoginModule } from '@workspace/ui-login';
import { WildCardModule } from '@workspace/wild-card';
import { MaterialModule } from '@workspace/material';
import { HttpClientModule } from '@angular/common/http';
import { CoreStateModule } from '@workspace/core-state';




@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent
  ],
  imports: [
  BrowserModule,
    UiLoginModule,
    UiToolbarModule,
    WildCardModule,
    CoreStateModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
