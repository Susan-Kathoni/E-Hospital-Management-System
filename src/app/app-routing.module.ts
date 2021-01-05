import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  // {path:'register', component:RegisterComponent},
  // {path:'login', component:LoginComponent},
  {path:'home', component:HomepageComponent},
  {path:'logout', component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
