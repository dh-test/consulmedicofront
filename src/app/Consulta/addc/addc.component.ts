import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/Modelos/Consulta';
import { Doctor } from 'src/app/Modelos/Doctor';
import { Medicamento } from 'src/app/Modelos/Medicamento';
import { Paciente } from 'src/app/Modelos/Paciente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-addc',
  templateUrl: './addc.component.html',
  styleUrls: ['./addc.component.css']
})
export class AddcComponent implements OnInit {

  doctores!: Doctor[];
  pacientes!: Paciente[];
  consulta: Consulta = new Consulta();
  constructor(private router:Router, private service:ServiceService) { }

  selectedPaciente: string = "";
  selectedDoctor: string = "";
  
  selectChangeHandler (event: any) {
    this.selectedPaciente = event.target.value;
  }
  selectChangeHandlerD (event: any) {
    this.selectedDoctor = event.target.value;
  }

  ngOnInit() {
    this.service.getDoctores()
    .subscribe(data => {this.doctores = data})
    this.service.getPacientes()
    .subscribe(data => {this.pacientes = data})
  }

  Guardar(consulta:Consulta) {
    consulta.idPaciente = Number(this.selectedPaciente);
    consulta.idDoctor = Number(this.selectedDoctor);
    this.service.createConsulta(consulta)
    .subscribe(data=>{
      alert("Se agrego correctamente!");
      this.router.navigate(["listarc"]);
    })
  }

  Agregar(consulta:Consulta) {
    localStorage.setItem("idConsulta", consulta.idConsulta.toString());
    this.router.navigate(["addc"]);
  }

}
