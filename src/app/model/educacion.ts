export class Educacion{

    id_educacion?: number;
    titulo_educacion: string;
    fecha_educacion: string;
    descripcion_educacion: string;
    img_educacion: string;  

    constructor(titulo_educacion: string, fecha_educacion: string, descripcion_educacion: string, img_educacion: string){
        
        this.titulo_educacion = titulo_educacion;
        this.fecha_educacion = fecha_educacion;
        this.descripcion_educacion = descripcion_educacion;
        this.img_educacion = img_educacion;
    }

}