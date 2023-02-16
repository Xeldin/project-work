import { ListaRecensioniComponent } from './recensioni/lista-recensioni/lista-recensioni.component';
import { FormRecensioniComponent } from './recensioni/form-recensioni/form-recensioni.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  const routes: Routes = [
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
