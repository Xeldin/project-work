import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormVideogamesComponent } from './videogames/form-videogames/form-videogames.component';
import { ListaVideogamesComponent } from './videogames/lista-videogames/lista-videogames.component';

const routes: Routes = [
  {
    path:'',
    component:ListaVideogamesComponent,
  },
  {
    path: 'formVideogame',
    component: FormVideogamesComponent
  },
  {
    path: 'formVideogame/:_id',
    component: FormVideogamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
