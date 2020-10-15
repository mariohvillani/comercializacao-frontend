import { NovoComponenteComponent } from './view/novo-componente/novo-componente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/view/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'componente',
    loadChildren: () => import('src/app/view/componente/componente.module').then(m => m.ComponenteModule)
  },
  {
    path: 'novo-componente',
    loadChildren: () => import('src/app/view/novo-componente/novo-componente.module').then(m => m.NovoComponenteModule)
  },
  {
    path: 'novo-componente/:id',
    loadChildren: () => import('src/app/view/novo-componente/novo-componente.module').then(m => m.NovoComponenteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
