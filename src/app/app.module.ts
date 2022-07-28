import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAppComponent } from './components/logo-app/logo-app.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAppComponent,
    RedesSocialesComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    BannerComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    NewExperienciaComponent,
    HomeComponent,
    EditExperienciaComponent,
    NuevaEducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
