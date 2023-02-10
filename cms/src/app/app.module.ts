import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVideogamesComponent } from 'src/app/videogames/lista-videogames/lista-videogames.component';
import { FormVideogamesComponent } from 'src/app/videogames/form-videogames/form-videogames.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVideogamesComponent,
    FormVideogamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
