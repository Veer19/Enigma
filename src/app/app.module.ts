import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'



//Router
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routes';


//AngularFire Modules
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';



//Importing Material Modules
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatTableModule } from '@angular/material';


import { FilterPipe} from './computers/filter.pipe';

//Importing Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ComicFirstComponent } from './comic-first/comic-first.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { PreviousButtonComponent } from './previous-button/previous-button.component';
import { StoryComicComponent } from './story-comic/story-comic.component';
import { BriefingComponent } from './briefing/briefing.component';
import { HeaderComponent } from './header/header.component';
import { Comic1Component } from './comic1/comic1.component';
import { PhoneLevelComponent } from './phone-level/phone-level.component';
import { NavigateComponent } from './navigate/navigate.component';
import { Comic2Component } from './comic2/comic2.component';
import { BackToPhoneComponent } from './back-to-phone/back-to-phone.component';
import { ComputersComponent } from './computers/computers.component';
import { Comic3Component } from './comic3/comic3.component';
import { CompletedComponent } from './completed/completed.component';
import { FailedComponent } from './failed/failed.component';
import { AdminComponent } from './admin/admin.component';






@NgModule({
  declarations: [
    FilterPipe,
    PageNotFoundComponent,
    AppComponent,
    LoginFormComponent,
    ComicFirstComponent,
    NextButtonComponent,
    PreviousButtonComponent,
    StoryComicComponent,
    BriefingComponent,
    HeaderComponent,
    Comic1Component,
    PhoneLevelComponent,
    NavigateComponent,
    Comic2Component,
    BackToPhoneComponent,
    ComputersComponent,
    Comic3Component,
    CompletedComponent,
    FailedComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    //AngularFire Initialization
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    // Material Modules
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
