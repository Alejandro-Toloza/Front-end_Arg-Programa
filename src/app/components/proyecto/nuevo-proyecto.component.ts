import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SProyectoService } from '../../service/s-proyecto.service';
import { Proyecto } from '../../model/proyecto';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombre:string;
  descripcion:string;
  fecha:string;

  constructor(private serviceProyect: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyect = new Proyecto(this.nombre, this.fecha, this.descripcion);
    this.serviceProyect.save(proyect).subscribe(
      data => {
        alert("Proyecto Agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }


}
