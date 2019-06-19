import { ProfileService } from './profile-service/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileViewSearchComponent } from './profile-view-search/profile-view-search.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
