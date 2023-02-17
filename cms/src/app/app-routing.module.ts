import { ListaRecensioniComponent } from './recensioni/lista-recensioni/lista-recensioni.component';
import { FormRecensioniComponent } from './recensioni/form-recensioni/form-recensioni.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategorieComponent } from './categories/form-categorie/form-categorie.component';
import { ListaCategorieComponent } from './categories/lista-categorie/lista-categorie.component';
import { FormNewsComponent } from './news/form-news/form-news.component';
import { ListaNewsComponent } from './news/lista-news/lista-news.component';
import { HomeComponent } from './home/home.component';
import { FormVideogamesComponent } from './videogames/form-videogames/form-videogames.component';
import { ListaVideogamesComponent } from './videogames/lista-videogames/lista-videogames.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'videogames',
    component:ListaVideogamesComponent,
  },
  {
    path: 'videogames/formVideogame',
    component: FormVideogamesComponent
  },
  {
    path: 'videogames/formVideogame/:id',
    component: FormVideogamesComponent
  },
  {
    path:'news',
    component: ListaNewsComponent
  },
  {
    path: 'news/formNews',
    component: FormNewsComponent
  },
  {
    path: 'news/formNews/:id',
    component: FormNewsComponent
  },
  {
    path:'categories',
    component: ListaCategorieComponent
  },
  {
    path: 'categories/formCategory',
    component: FormCategorieComponent
  },
  {
    path: 'categories/formCategory/:id',
    component: FormCategorieComponent
  },
  {
    path:'recensioni',
    component:ListaRecensioniComponent,
  },
  {
    path: 'recensioni/form-recensione',
    component: FormRecensioniComponent
  },
  {
    path: 'recensioni/form-recensione/:_id',
    component: FormRecensioniComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
