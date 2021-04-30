export class Medicamento {
    idMedicamento: number;
    cantidad: number;
    descripcion: string;
    dosis: string;
    idConsulta: number;

    constructor(){
        this.idMedicamento = 0;
        this.idConsulta = 0;
        this.cantidad = 0;
        this.descripcion = "";
        this.dosis = "";
    }
}