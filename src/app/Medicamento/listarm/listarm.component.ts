import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicamento } from 'src/app/Modelos/Medicamento';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listarm',
  templateUrl: './listarm.component.html',
  styleUrls: ['./listarm.component.css']
})
export class ListarmComponent implements OnInit {

  medicamentos! : Medicamento[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getMedicamentos()
    .subscribe(data => {this.medicamentos = data})
  }

  Delete(medicamento:Medicamento){
    this.service.deleteMedicamento(medicamento).subscribe(data => {
      this.medicamentos = this.medicamentos.filter(p=>p!==medicamento)
    })
  }
}
