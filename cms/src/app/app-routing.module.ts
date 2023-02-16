import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
