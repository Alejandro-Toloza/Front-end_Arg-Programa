export class Proyecto {

    id?: number;
    nombre:string;
    descripcion:string;
    fecha:string;

    constructor(nombre:string, descripcion:string, fecha:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }

}
