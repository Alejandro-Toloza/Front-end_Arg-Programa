import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nuevaexp', component: NewExperienciaComponent},
    { path: 'editexp/:id', component: EditExperienciaComponent},
    { path: 'nuevaedu', component: NuevaEducacionComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
