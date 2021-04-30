export class Paciente {
    idPaciente: number;
    historial: string;
    nombre: string;
    apellido: string;
    direccion: string;
    fechanac: string;

    constructor(){
        this.nombre = "";
        this.idPaciente = 0;
        this.historial = "";
        this.apellido = "";
        this.direccion = "";
        this.fechanac = "";
    }
}