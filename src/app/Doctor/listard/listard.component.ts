import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Modelos/Doctor';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listard',
  templateUrl: './listard.component.html',
  styleUrls: ['./listard.component.css']
})
export class ListardComponent implements OnInit {

  doctores!: Doctor[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getDoctores()
    .subscribe(data => {this.doctores = data})
  }

  Editar(doctor:Doctor) {
    localStorage.setItem("idDoctor", doctor.idDoctor.toString());
    this.router.navigate(["editd"]);
  }

  Delete(doctor:Doctor){
    this.service.deleteDoctor(doctor).subscribe(data => {
      this.doctores = this.doctores.filter(p=>p!==doctor)
    })
  }
}
