import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconsComponent } from './icons/icons.component';
import { MaterialModule } from '@workspace/material'
import { RoutingModule } from './routing.module';
import { UiLoginModule } from '@workspace/ui-login';
import { NotFoundModule } from '@workspace/not-found';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { CoreDataModule } from '@workspace/core-data';
import { HttpClientModule } from '@angular/common/http';
import { CoreStateModule } from '@workspace/core-state';


@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    UiLoginModule,
    NotFoundModule,
    UiToolbarModule,
    HttpClientModule,
    CoreDataModule,
    CoreStateModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
