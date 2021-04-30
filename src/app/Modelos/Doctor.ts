export class Doctor {
    idDoctor: number;
    especialidad: string;
    nombre: string;
    apellido: string;
    direccion: string;
    fechanac: string;

    constructor(){
        this.nombre = "";
        this.idDoctor = 0;
        this.especialidad = "";
        this.apellido = "";
        this.direccion = "";
        this.fechanac = "";
    }
}