import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedGuard } from './guard/logged';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormVideogamesComponent } from './videogames/form-videogames/form-videogames.component';
import { ListaVideogamesComponent } from './videogames/lista-videogames/lista-videogames.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    //
  },
  {
    path: 'home',
    component: HeaderComponent,
    canActivate: [LoggedGuard]
  },
  {
    path:'videogames',
    component: ListaVideogamesComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'videogames/formVideogame',
    component: FormVideogamesComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'videogames/formVideogame/:id',
    component: FormVideogamesComponent,
    canActivate: [LoggedGuard]
  },
  {
    path:'news',
    component: ListaNewsComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'news/formNews',
    component: FormNewsComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'news/formNews/:id',
    component: FormNewsComponent,
    canActivate: [LoggedGuard]
  },
  {
    path:'categories',
    component: ListaCategorieComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'categories/formCategory',
    component: FormCategorieComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'categories/formCategory/:id',
    component: FormCategorieComponent,
    canActivate: [LoggedGuard]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
