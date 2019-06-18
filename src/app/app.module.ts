import { ProfileService } from './profile-service/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileViewSearchComponent } from './profile-view-search/profile-view-search.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileViewSearchComponent,
    ProfileViewComponent,
    ProfileSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
