import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/Modelos/Consulta';
import { Doctor } from 'src/app/Modelos/Doctor';
import { Medicamento } from 'src/app/Modelos/Medicamento';
import { Paciente } from 'src/app/Modelos/Paciente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editc',
  templateUrl: './editc.component.html',
  styleUrls: ['./editc.component.css']
})
export class EditcComponent implements OnInit {

  doctores!: Doctor[];
  pacientes!: Paciente[];
  consulta: Consulta = new Consulta();
  medicamentos!: Medicamento[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.service.getMedicamentos()
    .subscribe(data => {this.medicamentos = data})
    this.service.getDoctores()
    .subscribe(data => {this.doctores = data})
    this.service.getPacientes()
    .subscribe(data => {this.pacientes = data})
    this.EditarC();
  }

  Actualizar(consulta:Consulta){
    this.service.updateConsulta(consulta)
    .subscribe(data=> {this.consulta=data;
      alert("Se actualizo correctamente!");
      this.router.navigate(["listarc"]);
    })
  }

  EditarC(){
    let id=localStorage.getItem("idConsulta");
    this.service.getConsultaId(+id!).subscribe(data=> {
      this.consulta=data;
    })
  }

  Editar(medicamento:Medicamento) {
    localStorage.setItem("idMedicamento", medicamento.idMedicamento.toString());
    this.router.navigate(["editm"]);
  }

  ListarM(){
    this.router.navigate(["addc"]);
  }
}
