import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CarreraComponent } from './components/views/carrera/carrera.component';
import { GeneradorComponent } from './components/views/generador/generador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':escuela/:carrera', component: CarreraComponent },
  { path: ':escuela/:carrera/generador', component: GeneradorComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
