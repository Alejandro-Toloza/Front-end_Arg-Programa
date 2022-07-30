import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { TokenService } from 'src/app/service/token.service';
import { SProyectoService } from '../../service/s-proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyect: Proyecto[]=[];

  constructor(private sProyectService: SProyectoService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarProyecto(): void {
    this.sProyectService.lista().subscribe(data => { this.proyect = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }



}
