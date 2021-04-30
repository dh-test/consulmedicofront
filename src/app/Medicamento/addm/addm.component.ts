import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicamento } from 'src/app/Modelos/Medicamento';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-addm',
  templateUrl: './addm.component.html',
  styleUrls: ['./addm.component.css']
})
export class AddmComponent implements OnInit {

  medicamento: Medicamento = new Medicamento();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(medicamento:Medicamento) {
    console.log('idconsul:: '+localStorage.getItem("idConsulta"));
    medicamento.idConsulta = Number(localStorage.getItem("idConsulta"));
    this.service.createMedicamento(medicamento)
    .subscribe(data=>{
      alert("Se agrego correctamente!");
      this.router.navigate(["listarc"]);
    })
  }
}
