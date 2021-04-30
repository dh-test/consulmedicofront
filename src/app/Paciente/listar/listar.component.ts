import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelos/Paciente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pacientes!: Paciente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPacientes()
    .subscribe(data => {this.pacientes = data})
  }

  Editar(paciente:Paciente) {
    localStorage.setItem("idPaciente", paciente.idPaciente.toString());
    this.router.navigate(["edit"]);
  }

  Ver(paciente:Paciente) {
    localStorage.setItem("idPaciente", paciente.idPaciente.toString());
    console.log(localStorage.getItem("idPaciente"));
    this.router.navigate(["editc"]);
  }

  Delete(paciente:Paciente){
    this.service.deletePaciente(paciente).subscribe(data => {
      this.pacientes = this.pacientes.filter(p=>p!==paciente)
    })
  }
}
