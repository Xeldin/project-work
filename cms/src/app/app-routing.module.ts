import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
