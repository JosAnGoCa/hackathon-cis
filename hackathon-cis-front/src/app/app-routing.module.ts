import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CarreraComponent } from './components/views/carrera/carrera.component';
import { GeneradorComponent } from './components/views/generador/generador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
  {
    path: 'fes-aragon',
    children: [
      { path: ':carrera', component: CarreraComponent },
      { path: ':carrera/generador', component: GeneradorComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
