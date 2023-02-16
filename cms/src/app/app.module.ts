import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVideogamesComponent } from 'src/app/videogames/lista-videogames/lista-videogames.component';
import { FormVideogamesComponent } from 'src/app/videogames/form-videogames/form-videogames.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNewsComponent } from './news/form-news/form-news.component';
import { ListaNewsComponent } from './news/lista-news/lista-news.component';
import { ListaCategorieComponent } from './categories/lista-categorie/lista-categorie.component';
import { FormCategorieComponent } from './categories/form-categorie/form-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaVideogamesComponent,
    FormVideogamesComponent,
    FormNewsComponent,
    ListaNewsComponent,
    ListaCategorieComponent,
    FormCategorieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
