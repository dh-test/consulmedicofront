import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/Modelos/Consulta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listarc',
  templateUrl: './listarc.component.html',
  styleUrls: ['./listarc.component.css']
})
export class ListarcComponent implements OnInit {

  consultas!: Consulta[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getConsultas()
    .subscribe(data => {this.consultas = data})
  }

  Editar(consulta:Consulta) {
    localStorage.setItem("idConsulta", consulta.idConsulta.toString());
    this.router.navigate(["editc"]);
  }

  Agregar(consulta:Consulta) {
    localStorage.setItem("idConsulta", consulta.idConsulta.toString());
    console.log(localStorage.getItem("idConsulta"));
    this.router.navigate(["addm"]);
  }

  Delete(consulta:Consulta){
    this.service.deleteConsulta(consulta).subscribe(data => {
      this.consultas = this.consultas.filter(p=>p!==consulta)
    })
  }
}
