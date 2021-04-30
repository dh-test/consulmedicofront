export class Consulta {
    idConsulta: number;
    idPaciente: number;
    idDoctor: number;
    historial: string;
    descripcion: string;
    fechaConsulta: string;
    nombrePaciente: string;
    nombreDoctor: string;

    constructor(){
        this.idConsulta = 0;
        this.idDoctor = 0;
        this.idPaciente = 0;
        this.historial = "";
        this.descripcion = "";
        this.fechaConsulta = "";
        this.nombrePaciente = "";
        this.nombreDoctor = "";
    }
}