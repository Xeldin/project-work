import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CategorieComponent } from './categorie-componenti/categorie/categorie.component';
import { ModificaComponent } from './categorie-componenti/modifica/modifica.component';
=======
import { CategorieComponent } from './categorie/categorie.component';
import { ModificaComponent } from './modifica/modifica.component';
import { LoginComponent } from './login/login.component';
import { PannelloModeratoriComponent } from './pannello-moderatori/pannello-moderatori.component';
import { HeaderComponent } from './header/header.component';

>>>>>>> f986d18cbad41257ab96f01507d0ebf140947632

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ModificaComponent,
    LoginComponent,
    PannelloModeratoriComponent,
    HeaderComponent
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
