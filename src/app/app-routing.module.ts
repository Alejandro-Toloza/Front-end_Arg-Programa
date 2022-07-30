import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './components/proyecto/editar-proyecto.component';

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'nuevaexp', component: NewExperienciaComponent},
    { path: 'editexp/:id', component: EditExperienciaComponent},
    { path: 'nuevaedu', component: NuevaEducacionComponent},
    { path: 'editedu/:id', component: EditEducacionComponent},
    { path: 'nuevoproyecto', component: NuevoProyectoComponent},
    { path: 'editpro/:id', component: EditarProyectoComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
