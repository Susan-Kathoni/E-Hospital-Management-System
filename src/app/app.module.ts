import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    RegisterComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatSnackBarModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
