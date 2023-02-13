import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotLoggedGuard } from './auth/not-logged.guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ModeratoreGuard } from './moderatore.guard';
import { PannelloModeratoriComponent } from './pannello-moderatori/pannello-moderatori.component';

const routes: Routes = [
  {
    path:'', 
    component: HeaderComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotLoggedGuard],
  },
  {
    path: 'pannello-moderatore',
    component: PannelloModeratoriComponent,
    canActivate: [ModeratoreGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }