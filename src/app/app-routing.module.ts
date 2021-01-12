import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component:LandingPageComponent },
  { path: 'doctor-login', component:DoctorLoginComponent },
  { path: 'patient-login', component:PatientLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
