import { RecensioniService } from './service/recensioni.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListaVideogamesComponent } from 'src/app/videogames/lista-videogames/lista-videogames.component';
import { FormVideogamesComponent } from 'src/app/videogames/form-videogames/form-videogames.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNewsComponent } from './news/form-news/form-news.component';
import { ListaNewsComponent } from './news/lista-news/lista-news.component';
import { ListaCategorieComponent } from './categories/lista-categorie/lista-categorie.component';
import { FormCategorieComponent } from './categories/form-categorie/form-categorie.component';
import { ListaRecensioniComponent } from './recensioni/lista-recensioni/lista-recensioni.component';
import { FormRecensioniComponent } from './recensioni/form-recensioni/form-recensioni.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaRecensioniComponent,
    FormRecensioniComponent,
    HomeComponent,
    HeaderComponent,
    ListaVideogamesComponent,
    FormVideogamesComponent,
    NavBarComponent, 
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
