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
import { ListaRecensioniComponent } from './recensioni/lista-recensioni/lista-recensioni.component';
import { FormRecensioniComponent } from './recensioni/form-recensioni/form-recensioni.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListaRecensioniComponent,
    FormRecensioniComponent,
    HomeComponent,
    HeaderComponent,
    ListaVideogamesComponent,
    FormVideogamesComponent, 
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
