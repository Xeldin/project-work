import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ModificaComponent } from './modifica/modifica.component';
import { LoginComponent } from './login/login.component';
import { PannelloModeratoriComponent } from './pannello-moderatori/pannello-moderatori.component';
import { HeaderComponent } from './header/header.component';


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
