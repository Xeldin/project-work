import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie-componenti/categorie/categorie.component';
import { ModificaComponent } from './categorie-componenti/modifica/modifica.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ModificaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
