import { ListaRecensioniComponent } from './recensioni/lista-recensioni/lista-recensioni.component';
import { FormRecensioniComponent } from './recensioni/form-recensioni/form-recensioni.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
