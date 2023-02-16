import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategorieComponent } from './categories/form-categorie/form-categorie.component';
import { ListaCategorieComponent } from './categories/lista-categorie/lista-categorie.component';
import { FormNewsComponent } from './news/form-news/form-news.component';
import { ListaNewsComponent } from './news/lista-news/lista-news.component';
import { FormVideogamesComponent } from './videogames/form-videogames/form-videogames.component';
import { ListaVideogamesComponent } from './videogames/lista-videogames/lista-videogames.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
