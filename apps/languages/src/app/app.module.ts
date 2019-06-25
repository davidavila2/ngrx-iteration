import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { RoutingModule } from './routing.module';
import { UiLoginModule } from '@workspace/ui-login';
import { UiToolbarModule } from '@workspace/ui-toolbar';
import { MaterialModule } from '@workspace/material';
import { CoreDataModule } from '@workspace/core-data';
import { LanguagesDetailsComponent } from './languages/languages-details/languages-details.component';
import { LanguagesListComponent } from './languages/languages-list/languages-list.component';
import { LanguagesItemComponent } from './languages/languages-item/languages-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WildCardModule } from '@workspace/wild-card';

@NgModule({
  declarations: [AppComponent, LanguagesComponent, LanguagesDetailsComponent, LanguagesListComponent, LanguagesItemComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    CoreDataModule,
    FormsModule,
    WildCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
